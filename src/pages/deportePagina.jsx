import { DeportesList } from "../components/deporteList"
import Button from "react-bootstrap/Button";

export function DeportePagina(){
    return (
        <div>           
            <h1>LISTADO DEPORTES</h1>
            <Button href="/deportes-add" variant="success">Agregar deporte</Button>
            <DeportesList/>
        </div>
    )
}