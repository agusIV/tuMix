import "./cabezera.css"
import { useNavigate } from "react-router-dom";
import CabezeraBuscador from "../../componentes/cabezera/cabezeraBuscador"
import CabezeraDerecha from "../../componentes/cabezera/cabezeraDerecha"
import logo from "../../assets/imagenes/logo.png"
import { useDispositivo } from "../../contextAPI/dispositivoContext";

export default function Cabezera() {
  const navigate = useNavigate()
  const {esMovil} = useDispositivo()

  return(
    <nav id={`cabezera${esMovil ? "":"PC"}`} className="navbar navbar-expand-lg fs-5">
      <div className="container-fluid d-flex align-items-center flex-nowrap">
        <div 
          id="cabezeraLogo" 
          className="navbar-brand" 
          onClick={() => navigate("")}
        >
          <img className="cabezeraBotones" src={logo} alt="Logo" />
        </div>

        <div className="d-flex justify-content-center flex-grow-1 mx-3">
          <CabezeraBuscador navigate={navigate} />
        </div>

        <div className="d-flex align-items-center ms-auto">
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="offcanvas" 
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div 
        className="offcanvas offcanvas-end" 
        id="offcanvasNavbar" 
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <CabezeraDerecha navigate={navigate}/>
        </div>
      </div>
    </div>
  </div>
    </nav>
  )
}