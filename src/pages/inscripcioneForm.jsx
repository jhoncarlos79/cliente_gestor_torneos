import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createInscripcione, updateInscripcione, deleteInscripcione, getInscripcione } from '../api/inscripcione.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { EquipoCombo } from "../components/equipoCombo";

export function InscripcioneForm(){
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
            const res=await updateInscripcione(param.id, data, authHeaders);  // Actualizar un inscripcione
        }else{
            const res=await createInscripcione(data, authHeaders);  // Crear un inscripcione
            console.log(res);
        }        
        navigate("/inscripciones")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadInscripcione() {
            if (param.id) {
                const res = await getInscripcione(param.id);
                const inscripcione = res.data;
                //console.log(res);
                // Coloca los valores en el formulario
                setValue('id_equipo', inscripcione.id_equipo);
                setValue('id_torneo', inscripcione.id_torneo);
            }
        }
        loadInscripcione();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <form on onSubmit={onSubmit}>
                <EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                {/*<input type="number" placeholder='id_equipo' {...register("id_equipo", {required: true})}/>*/}
                {errors.id_equipo && <span>El id del equipo es requerido</span>}
                <input type="number" placeholder='id_torneo' {...register("id_torneo", {required: true})}/>
                {errors.id_torneo && <span>El id de torneo es requerido</span>}
                <button>Guardar</button>
            </form>
            {param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar la inscripcion?");
                    if (accepted){
                        await deleteInscripcione(param.id, authHeaders);  // Eliminar una Inscripcion
                        navigate("/inscripciones")
                    }
                }}>Borrar</button>)}
        </div>
    )
}