import "./envios.css"
import zona from "../../assets/imagenes/zonaDeEntrega.png"
import { useDispositivo } from "../../contextAPI/dispositivoContext"

export default function Envios() {
  const {esMovil} = useDispositivo()

  return (
    <div id="envios" className="mx-auto my-5 rounded-5 overflow-hidden text-center shadow-lg">
      <h2 id={`enviosTitulo${esMovil ? "Movil":""}`} className="pt-3">envios y puntos de encuentro</h2>
      <div id="enviosInfo" className="gap-2 pt-3 ">
        <div id={`enviosTexto${esMovil ? "Movil":""}`} className="">realizamos envios y puntos de encuentro en las zonas marcadas los dias martes, miercoles y viernes</div>
        <img src={zona} className="w-100" alt="" />
      </div>
    </div>
  )
}