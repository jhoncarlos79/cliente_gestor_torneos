import { EquipoList } from "../components/equipoList"
import Button from "react-bootstrap/Button";

export function EquipoPagina(){
    return (
        <div>           
            <h1>LISTADO EQUIPOS</h1>
            <Button href="/equipos-add" variant="success">Crear equipo</Button>
            <EquipoList/>
        </div>
    )
}