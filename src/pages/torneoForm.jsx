import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createTorneo, updateTorneo, deleteTorneo, getTorneo } from '../api/torneo.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

export function TorneoForm(){
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    // Obtenemos el token jwt
    const token = localStorage.getItem(ACCESS_TOKEN);

    console.log(token);

    const authHeaders={
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            console.log("Modificando...");
            const res=await updateTorneo(param.id, data, authHeaders);  // Actualizar un torneo
        }else{
            const res=await createTorneo(data, authHeaders);  // Crear un torneo
            console.log(res);
        }        
        navigate("/torneos")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadTorneo() {
            if (param.id) {
                const res = await getTorneo(param.id);
                const torneo = res.data;
                //console.log(res);
                // Coloca los valores en el formulario
                setValue('nombre', torneo.nombre);
                setValue('fecha_inicio', torneo.fecha_inicio);
                setValue('fecha_fin', torneo.fecha_fin);
                setValue('id_deporte', torneo.id_deporte);
            }
        }
        loadTorneo();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <form on onSubmit={onSubmit}>
                <input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del deporte es requerido</span>}
                <input type="date" placeholder='fecha_inicio' {...register("fecha_inicio", {required: true})}/>
                {errors.fecha_inicio && <span>El fecha de inicio es requerida</span>}                
                <input type="date" placeholder='fecha_fin' {...register("fecha_fin", {required: true})}/>
                {errors.fecha_fin && <span>El fecha de fin es requerida</span>}                
                <input type="number" placeholder='id_deporte' {...register("id_deporte", {required: true})}/>
                {errors.id_deporte && <span>El id de deporte es requerido</span>}
                <button>Guardar</button>
            </form>
            {param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el torneo?");
                    if (accepted){
                        await deleteTorneo(param.id, authHeaders);  // Eliminar un torneo
                        navigate("/torneos")
                    }
                }}>Borrar</button>)}
        </div>
    )
}