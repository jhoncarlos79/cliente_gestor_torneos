import { Link } from 'react-router-dom';

export function Navigation(){
    return(
        <div>
            <h1><Link to="/deportes">Aplicacion de Deportes</Link></h1>
            <Link to="/deportes-add">Agregar Nuevo Deporte</Link>
            <h1><Link to="/torneos">Aplicacion de Torneos</Link></h1>
            <Link to="/torneos-add">Agregar Nuevo Torneo</Link>
        </div>
    )
}