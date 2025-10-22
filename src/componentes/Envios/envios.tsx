import "./envios.css"
import zona from "../../assets/imagenes/zonaDeEntrega.png"
import { useDispositivo } from "../../contextAPI/dispositivoContext"

export default function Envios() {
  const {esMovil} = useDispositivo()

  return (
    <div id="envios" className={`mx-auto rounded-5 overflow-hidden text-center shadow-lg ${esMovil ? "my-3" : "my-5"}`}>
      <h2 id={`enviosTitulo${esMovil ? "Movil":""}`} className={`${esMovil ? "pt-1": "pt-3"}`}>envios y puntos de encuentro</h2>
      <div id="enviosInfo" className={`${esMovil ? "" : "pt-3"}`}>
        <div id={`enviosTexto${esMovil ? "Movil":""}`} className={`${esMovil ? "pb-1":"pb-3"}`}>realizamos envios y puntos de encuentro en las zonas marcadas los dias martes, miercoles y viernes</div>
        <img src={zona} className="w-100" alt="" />
      </div>
    </div>
  )
}