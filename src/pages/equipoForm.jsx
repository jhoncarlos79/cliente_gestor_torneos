import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createEquipo, updateEquipo, deleteEquipo, getEquipo } from '../api/equipo.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { DeporteCombo } from '../components/deporteCombo';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function EquipoForm(){
       
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    //console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){
            const res=await updateEquipo(param.id, data);  // Actualizar un Equipo
        }else{
            const res=await createEquipo(data);  // Crear un Equipo
        }        
        navigate("/equipos")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadEquipo() {
            if (param.id) {
                const res = await getEquipo(param.id);
                const equipo = res.data;
                //console.log(res);
                // Setea los valores en el formulario
                setValue('nombre', equipo.nombre);
                setValue('id_usuario', equipo.id_usuario);
                setValue('id_deporte', equipo.id_deporte);
            }
        }
        loadEquipo();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <h1>FORMULARIO EQUIPOS</h1>
            <form on onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.nombre && "El nombre del equipo es requerido"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" placeholder='id_usuario' {...register("id_usuario", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.id_usuario && "El id del usuario es requerido"}
                    </Form.Text>
                </Form.Group>
                <DeporteCombo register={register} setValue={setValue}/>
                <Button variant="primary" type="submit">
                    Guardar
                </Button><br />
                {/*<input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del equipo es requerido</span>}
                <input type="number" placeholder='id_usuario' {...register("id_usuario", {required: true})}/>
                {errors.id_usuario && <span>El id de usuario es requerido</span>}
                <DeporteCombo register={register} setValue={setValue}/> 
                <input type="number" placeholder='id_deporte' {...register("id_deporte", {required: true})}/>
                {errors.id_deporte && <span>El id de deporte es requerido</span>}
                <button>Guardar</button>*/}
            </form>
            {param.id && (
                <Button variant="primary" onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el equipo?");
                    if (accepted){
                        await deleteEquipo(param.id);  // Eliminar un equipo
                        navigate("/equipos")
                    }
                }}>Borrar</Button>)}
            {/*{param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el equipo?");
                    if (accepted){
                        await deleteEquipo(param.id);  // Eliminar un equipo
                        navigate("/equipos")
                    }
                }}>Borrar</button>)}*/}
        </div>
    )
}