import "./lista.css"
import { useSearchParams} from 'react-router-dom';
import ListaBuscador from "../../componentes/lista/listaBuscador";
import ListaProductos from "../../componentes/lista/listaProductos";
import { useLista } from "../../contextAPI/listaContext";
import { useDispositivo } from "../../contextAPI/dispositivoContext";

export default function Lista(){
  const { lista } = useLista()
  const {esMovil} = useDispositivo()
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriasSeleccionadas = searchParams.getAll("categoria");

  const handleCategoriaChange = (categoria: string) => {
    const nuevasCategorias = categoriasSeleccionadas.includes(categoria)
      ? categoriasSeleccionadas.filter(c => c !== categoria)
      : [...categoriasSeleccionadas, categoria];
    
    const params = new URLSearchParams();
    nuevasCategorias.forEach(cat => params.append("categoria", cat));
    setSearchParams(params);
  };

  const prodFiltrados = lista.filter((producto) => {
    return categoriasSeleccionadas.length === 0 || 
      producto.categorias.some(cat => categoriasSeleccionadas.includes(cat));
  });
  
  return(
    <div id={esMovil ? "listaMovil" : "lista"} className={`mx-auto ${esMovil ? "mt-3" : "mt-5"}`}>
      <ListaBuscador 
        lista={lista}
        categoriasSeleccionadas={categoriasSeleccionadas}
        onCategoriaChange={handleCategoriaChange}
      />
      <ListaProductos 
        productosFiltrados={prodFiltrados}
      />
    </div>
  )
}