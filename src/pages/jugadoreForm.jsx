import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createJugadore, updateJugadore, deleteJugadore, getJugadore } from '../api/jugadore.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { EquipoCombo } from "../components/equipoCombo";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function JugadoreForm(){
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            console.log("Modificando...");
            const res=await updateJugadore(param.id, data);  // Actualizar un jugadore
        }else{
            const res=await createJugadore(data);  // Crear un jugadore
            console.log(res);
        }        
        navigate("/jugadores")
    })

    // Para rellenar el formulario si hay un parametro en la url

    useEffect(() => {
        async function loadjugadore() {
            if (param.id) {
                const res = await getJugadore(param.id);
                const jugadore = res.data;
                //console.log(res);
                // Coloca los valores en el formulario
                setValue('nombre', jugadore.nombre);
                setValue('fecha_nacimiento', jugadore.fecha_nacimiento);
                setValue('estatura', jugadore.estatura);
                setValue('peso', jugadore.peso);
                setValue('id_equipo', jugadore.id_equipo);
                setValue('fecha_vinculacion', jugadore.fecha_vinculacion);                
            }
        }
        loadjugadore();
    }, [param.id, setValue]);
    
    return (        
        <div>
            <h1>FORMULARIO JUGADORES</h1>
            <form on onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.nombre && "El nombre del deporte es requerido"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fecha de nacimiento</Form.Label>
                    <Form.Control type="date" placeholder='fecha_nacimiento' {...register("fecha_nacimiento", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.fecha_nacimiento && "La fecha de nacimiento es requerida"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Estatura</Form.Label>
                    <Form.Control type="number" placeholder='estatura' {...register("estatura", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.estatura && "La estatura del jugador es requerida"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Peso</Form.Label>
                    <Form.Control type="number" placeholder='peso' {...register("peso", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.peso && "El peso del jugador es requerido"}
                    </Form.Text>
                </Form.Group>
                <EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Fecha de vinculacion</Form.Label>
                    <Form.Control type="date" placeholder='fecha_vinculacion' {...register("fecha_vinculacion", {required: true})}/>
                    <Form.Text className="text-muted">
                        {errors.fecha_vinculacion && "La fecha de vinculacion es requerida"}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Guardar
                </Button><br />
                {/*<input type="text" placeholder='nombre' {...register("nombre", {required: true})}/>
                {errors.nombre && <span>El nombre del deporte es requerido</span>}
                <input type="date" placeholder='fecha_nacimiento' {...register("fecha_nacimiento", {required: true})}/>
                {errors.fecha_nacimiento && <span>La fecha de nacimiento es requerido</span>}
                <input type="number" placeholder='estatura' {...register("estatura", {required: true})}/>
                {errors.estatura && <span>La estatura es requerido</span>}
                <input type="number" placeholder='peso' {...register("peso", {required: true})}/>
                {errors.peso && <span>El peso es requerido</span>}
                <EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                {<input type="number" placeholder='id_equipo' {...register("id_equipo", {required: true})}/>}
                {errors.id_equipo && <span>El ide de equipo es requerido</span>}
                <input type="datetime-local" placeholder='fecha_vinculacion' {...register("fecha_vinculacion", {required: true})}/>
                {errors.fecha_vinculacion && <span>La fecha de de vinculacion es requerido</span>}
                <button>Guardar</button>*/}
            </form>
            {param.id && (
                <Button variant="primary" onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el jugador?");
                    if (accepted){
                        await deleteJugadore(param.id);  // Eliminar un jugadore
                        navigate("/jugadores")
                    }
                }}>Borrar</Button>)}
            {/*param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar el jugador?");
                    if (accepted){
                        await deleteJugadore(param.id);  // Eliminar un jugadore
                        navigate("/jugadores")
                    }
                }}>Borrar</button>)*/}
        </div>
    )
}