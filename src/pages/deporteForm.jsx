import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createDeporte, updateDeporte, deleteDeporte, getDeporte } from '../api/deporte.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

export function DeporteForm(){
    
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
    //console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            //console.log("Modificando...");
            const res=await updateDeporte(param.id, data, authHeaders);  // Actualizar un deporte
        }else{
            const res=await createDeporte(data, authHeaders);  // Crear un deporte
            console.log(res);
        }        
        navigate("/deportes")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadDeporte() {
            if (param.id) {
                const res = await getDeporte(param.id);
                const deporte = res.data;
                console.log(res);
                // Coloca los valores en el formulario
                setValue('nombre', deporte.nombre);
                setValue('num_jugadores', deporte.num_jugadores);
            }
        }
        loadDeporte();
    }, [param.id, setValue]);
    
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
                        await deleteDeporte(param.id, authHeaders);  // Eliminar un deporte
                        navigate("/deportes")
                    }
                }}>Borrar</button>)}
        </div>
    )
}