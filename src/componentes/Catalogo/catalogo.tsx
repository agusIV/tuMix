import "./catalogo.css"
import { useNavigate } from 'react-router-dom';
import { useDispositivo } from "../../contextAPI/dispositivoContext";
import mix from "../../assets/imagenes/mix.jpeg"
import secos from "../../assets/imagenes/secos.jpeg"
import deshidratadas from "../../assets/imagenes/deshidratadas.jpeg"
import snacks from "../../assets/imagenes/snacks.jpeg"
import CYG from "../../assets/imagenes/CYG.jpeg"
import otros from "../../assets/imagenes/otros.jpeg"

export default function Catalogo() {
  const navigate = useNavigate()
  const {esMovil} = useDispositivo()
  const cambiarRuta = (cat: string) => {
    const parametro = new URLSearchParams({categoria: cat}).toString()
    navigate(`/Lista?${parametro}`);
  }

  return (
    <div id="catalogo" className='mx-auto my-5 rounded-5 overflow-hidden shadow-lg'>
      <h2 id={`catalogoTitulo${esMovil ? "Movil":""}`} className='text-center p-3'>CATEGORIAS</h2>
      <div id="catalogoSecciones" className='d-flex flex-wrap gap-2 justify-content-center py-3'>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Mix")}>
          <img className="catalogoImagen" src={mix} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>mixes</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutos Secos")}>
          <img className="catalogoImagen" src={secos} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>frutos secos</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutas Deshidratadas")}>
          <img className="catalogoImagen" src={deshidratadas} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>frutas deshidratadas</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Snacks")}>
          <img className="catalogoImagen" src={snacks} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>snacks</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Cereales y Granos")}>
          <img className="catalogoImagen" src={CYG} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>cereales y granos</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Otros")}>
          <img className="catalogoImagen" src={otros} alt=""/>
          <div className={`catalogoNombre${esMovil ? "Movil":""}`}>otros</div >
        </div>
      </div>
    </div>
  )
}
