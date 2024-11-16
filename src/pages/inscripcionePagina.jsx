import { InscripcioneList } from "../components/inscripcioneList"
import Button from "react-bootstrap/Button";

export function InscripcionePagina(){
    return (
        <div>           
            <h1>LISTADO INSCRIPCIONES</h1>
            <Button href="/inscripciones-add" variant="success">Generar inscripción</Button>
            <InscripcioneList/>
        </div>
    )
}