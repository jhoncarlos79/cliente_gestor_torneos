import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createPartido, updatePartido, deletePartido, getPartido } from '../api/partido.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

export function PartidoForm(){
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
        console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            console.log("Modificando...");
            const res=await updatePartido(param.id, data, authHeaders);  // Actualizar un partido
        }else{
            const res=await createPartido(data, authHeaders);  // Crear un partido
            console.log(res);
        }        
        navigate("/partidos")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadPartido() {
            if (param.id) {
                const res = await getPartido(param.id);
                const partido = res.data;
                console.log(res);
                // Coloca los valores en el formulario
                setValue('fecha', partido.fecha);
                setValue('hora', partido.hora);
                setValue('lugar', partido.lugar);
                setValue('id_torneo', partido.id_torneo);
                setValue('id_equipo1', partido.id_equipo1);
                setValue('id_equipo2', partido.id_equipo2);
                setValue('resultado_equipo1', partido.resultado_equipo1);
                setValue('resultado_equipo2', partido.resultado_equipo2);                
            }
        }
        loadPartido();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <form on onSubmit={onSubmit}>
                <input type="date" placeholder='fecha' {...register("fecha", {required: true})}/>
                {errors.fecha && <span>El fecha es requerida</span>}
                <input type="datetime-local" placeholder='hora' {...register("hora", {required: true})}/>
                {errors.hora && <span>La hora es requerida</span>}
                <input type="text" placeholder='lugar' {...register("lugar", {required: true})}/>
                {errors.lugar && <span>El lugar es requerido</span>}
                <input type="number" placeholder='id_torneo' {...register("id_torneo", {required: true})}/>
                {errors.id_torneo && <span>El id de torneo es requerido</span>}
                <input type="number" placeholder='id_equipo1' {...register("id_equipo1", {required: true})}/>
                {errors.id_equipo1 && <span>El id de equipo1 es requerido</span>}
                <input type="number" placeholder='id_equipo2' {...register("id_equipo2", {required: true})}/>
                {errors.id_equipo2 && <span>El id de equipo2 es requerido</span>}
                <input type="number" placeholder='resultado_equipo1' {...register("resultado_equipo1", {required: true})}/>
                {errors.resultado_equipo1 && <span>El resultado del equipo1 es requerido</span>}
                <input type="number" placeholder='resultado_equipo2' {...register("resultado_equipo2", {required: true})}/>
                {errors.resultado_equipo2 && <span>El resultado del equipo2 es requerido</span>}
                <button>Guardar</button>
            </form>
            {param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el partido?");
                    if (accepted){
                        await deletePartido(param.id, authHeaders);  // Eliminar un partido
                        navigate("/partidos")
                    }
                }}>Borrar</button>)}
        </div>
    )
}