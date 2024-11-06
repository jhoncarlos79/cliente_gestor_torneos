import { useNavigate } from "react-router-dom"

export function DeporteCard({deporte}){
    
    const navigate = useNavigate();
    
    return (
        <div style={{background: "#cac0ff3d"}} 
        
        // Para poder eliminar se arma la ruta
        onClick={()=>{
            navigate('/deportes/' + deporte.id_deporte)
        }}>
            <p>{deporte.nombre}</p>
            <p>{deporte.num_jugadores}</p>
        </div>
    )
}