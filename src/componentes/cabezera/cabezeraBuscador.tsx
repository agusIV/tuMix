import {useState} from "react"
import { useLista } from "../../contextAPI/listaContext";
import type { NavigateFunction } from "react-router-dom";
import {Form, InputGroup, Button, ListGroup} from "react-bootstrap"
interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}
interface Props {
  navigate: NavigateFunction;
}

export default function CabezeraBuscador({navigate}: Props) {
  const [consulta, setConsulta] = useState("")
  const [sugerencias, setSugerencias] = useState(false)
  const {lista} = useLista()

  const filtrados = lista.filter(p =>
    p.nombre.toLowerCase().includes(consulta.toLowerCase())
  )

  const irAProducto = (producto: Producto) => {
    navigate(`/producto`, {state: {producto}})
  }
  const buscarProductos = (fil: Array<Producto>) => {
    const parametro = new URLSearchParams({filtrados: JSON.stringify(fil)})
    navigate(`/Lista?${parametro}`);
  }

  const manejarSeleccionado = (producto: Producto) => {
    setConsulta(producto.nombre)
    setSugerencias(false)
    irAProducto(producto)
  }

  return (
    <div id="cabezeraBuscador" className="position-relative w-100 flex-grow-1 d-flex justify-content-center">
      <InputGroup>
        <Form.Control
          id="buscador"
          type="text"
          placeholder="Buscar productos..."
          value={consulta}
          onChange={(e) => {
            setConsulta(e.target.value)
            setSugerencias(true)
          }}
          onFocus={() => setSugerencias(true)}
          onBlur={() => setTimeout(() => setSugerencias(false), 200)}//delay para permitir click
        />
        <Button variant="outline-secondary" className="bi bi-search" onClick={() => buscarProductos(filtrados)}></Button>
      </InputGroup>
      {sugerencias && consulta && (
        <ListGroup id="buscadorLista" className="position-absolute w-100">
          {filtrados.slice(0, 5).map(p => (
            <ListGroup.Item
              id="buscadorListaItem"
              action
              onClick={() => manejarSeleccionado(p)}
            >
              {p.nombre}
            </ListGroup.Item>
          ))}
          {filtrados.length === 0 && (
            <ListGroup.Item>No se encontraron productos</ListGroup.Item>
          )}
        </ListGroup>
      )}
    </div>
  )
}
