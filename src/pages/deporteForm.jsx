import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { createDeporte } from '../api/deporte.api';
import { deleteDeporte } from '../api/deporte.api';

export function DeporteForm(){
    
    const {register, handleSubmit, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        console.log(data);
        const res=await createDeporte(data);
        console.log(data);
    })
    
    return (        
        <div>
            <form on onSubmit={onSubmit}>
                <input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del deporte es requerido</span>}
                <input type="number" placeholder='num_jugadores' {...register("num_jugadores", {required: true})}/>
                {errors.num_jugadores && <span>El numero de judadores es requerido</span>}
                <button>Guardar</button>
            </form>
            {param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el deporte?");
                    if (accepted){
                        await deleteDeporte(param.id);
                        navigate("/libros")
                    }
                }}>Borrar</button>)}
        </div>
    )
}