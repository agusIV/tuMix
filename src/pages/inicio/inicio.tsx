import "./inicio.css"
import Carrusel from "../../componentes/carrusel";
import Catalogo from "../../componentes/catalogo";
import Envios from "../../componentes/envios";
//import {useUsuario} from "../../contextAPI/usuarioContext"
import { useDispositivo } from "../../contextAPI/dispositivoContext";
export default function Inicio() {
    //const {usuario} = useUsuario()
    const {esMovil} = useDispositivo()
    return(
        <div id={`inicio${esMovil ? "":"PC"}`}>
            <Carrusel/>
            <Catalogo/>
            <Envios/>
        </div> 
    )
}