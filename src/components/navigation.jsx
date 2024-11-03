import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

export function Navigation(){
    return(
        <div>
            <ListGroup horizontal>
                <ListGroup.Item><Link to="/deportes">Aplicacion de Deportes</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/deportes-add">Agregar Nuevo Deporte</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/torneos">Aplicacion de Torneos</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/torneos-add">Agregar Nuevo Torneo</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/equipos">Aplicacion de Equipos</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/equipos-add">Agregar Nuevo Equipo</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/inscripciones">Aplicacion de Inscripcion</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/inscripciones-add">Agregar Nuevo Inscripcion</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/jugadores">Aplicacion de Jugador</Link></ListGroup.Item>
                <ListGroup.Item><Link to="/jugadores-add">Agregar Nuevo Jugador</Link></ListGroup.Item>
            </ListGroup>
        </div>
    )
}