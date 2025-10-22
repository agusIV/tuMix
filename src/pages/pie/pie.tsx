import "./pie.css"
import { useDispositivo } from "../../contextAPI/dispositivoContext"

export default function Pie(){
  const {esMovil} = useDispositivo()
  return (
    <footer id="pie" className="d-flex justify-content-center align-items-center">
      {esMovil ? (
        <div className="pt-2">
          <p>© tuMix 2025</p> 
          <p>Todos los derechos reservados</p> 
          <p>Diseño web: Agustin Ivan Veron</p>
        </div>
      ):(  
        <p className="p-3">© tuMix 2025 · Todos los derechos reservados · Diseño web: Agustin Ivan Veron</p> 
      )
    }
  </footer>
  )
}
