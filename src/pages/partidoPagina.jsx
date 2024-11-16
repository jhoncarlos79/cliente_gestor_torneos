import { PartidoList } from "../components/partidoList"
import Button from "react-bootstrap/Button";

export function PartidoPagina(){
    return (
        <div>           
            <h1>LISTADO PARTIDOS</h1>
            <Button href="/partidos-add" variant="success">Agendar encuentro</Button>
            <PartidoList/> 
        </div>
    )
}