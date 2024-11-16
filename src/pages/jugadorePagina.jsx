import { JugadoreList } from "../components/jugadoreList"
import Button from "react-bootstrap/Button";

export function JugadorePagina(){
    return (
        <div>           
            <h1>LISTADO JUGADORES</h1>
            <Button href="/jugadores-add" variant="success">Registrar jugador</Button>
            <JugadoreList/> 
        </div>
    )
}