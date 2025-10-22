import { useNavigate } from "react-router-dom"
import { useDispositivo } from "../../contextAPI/dispositivoContext";
interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

interface ListaProductosProps {
  productosFiltrados: Producto[]
}

export default function ListaProductos({ productosFiltrados }: ListaProductosProps){
  const navigate = useNavigate()
  const {esMovil} = useDispositivo()

  return(
    <div id={`listaProductos${esMovil ? "Movil":""}`} className={`d-flex flex-wrap justify-content-center ${esMovil ? "my-3 gap-1": "my-5 gap-3"}`}>
      {productosFiltrados.map(producto => { 
        const imagen = new URL(`../../assets/imagenes/logo.png`, import.meta.url).href
        return (
          <div className={`listaProducto${esMovil ? "Movil":""} d-flex rounded-5 shadow overflow-hidden border position-relative`} key={producto.nombre} >
            <div className={`listaImagen${esMovil ? "Movil":""}`}><img className="w-100" src={imagen} onClick={() => navigate("/producto", {state: {producto}})}/></div>
            <div className={`listaInfo${esMovil ? "Movil":""}`}>
              <div className={`listaNombre${esMovil ? "Movil":""}`}>
                {producto.nombre}
              </div>
              <div className={`listaDescripcion${esMovil ? "Movil":""} p-1`}>
                {producto.descripcion}
              </div>
              <div className={`listaLeer${esMovil ? "Movil":""}`} onClick={() => navigate("/producto", {state: {producto}})}>leer mas</div>
            </div>    
                
            <div className={`listaPrecios${esMovil ? "Movil":""} d-flex flex-column justify-content-center bg-white ms-auto text-center align-items-center`}>
              <div className="listaP">100grs: {producto.precios[3]}</div>
              <div className="listaP">250grs: {producto.precios[2]}</div>
              <div className="listaP">500grs: {producto.precios[1]}</div>
              <div className="listaP">1 kilo: {producto.precios[0]}</div>
              <div className="listaComprar rounded-3 p-1" onClick={() => navigate("/producto", {state: {producto}})}>comprar</div>
            </div>     
          </div>
        )
      })}
    </div>
  )
}