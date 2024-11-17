import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createJugadore, updateJugadore, deleteJugadore, getJugadore } from '../api/jugadore.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { EquipoCombo } from "../components/equipoCombo";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

export function JugadoreForm(){
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    //console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        ////console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un jugador o modificarlo
            //console.log("Modificando...");
            const res=await updateJugadore(param.id, data);  // Actualizar un jugadore
            toast.success('Jugador Modificado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
        }else{
            const res=await createJugadore(data);  // Crear un jugadore
            toast.success('Jugador Creado', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            });
            //console.log(res);
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
            <h1 className="text-center pb-4">FORMULARIO JUGADORES</h1>
            <div className="d-flex justify-content-center" style={{ height: "50vh" }}>
                <form on onSubmit={onSubmit}>
                    <Form.Group controlId="formFileSm" className="mb-3">
                        <Form.Label>Foto de perfil</Form.Label>
                        <Form.Control type="file" size="sm" accept="image/png, image/jpeg"/>
                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Equipo</Form.Label>
                        <EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                        <Form.Text className="text-muted">
                            {errors.id_equipo && "El equipo es requerido"}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fecha de vinculacion</Form.Label>
                        <Form.Control type="date" placeholder='fecha_vinculacion' {...register("fecha_vinculacion", {required: true})}/>
                        <Form.Text className="text-muted">
                            {errors.fecha_vinculacion && "La fecha de vinculacion es requerida"}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">
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
                {param.id && (
                    <Button className="mt-2" variant="danger" onClick={async() => {
                        const accepted = window.confirm("¿Desea Eliminar el jugador?");
                        if (accepted){
                            await deleteJugadore(param.id);  // Eliminar un jugadore
                            toast.success('Jugador Eliminado', {
                                position: "bottom-right",
                                style: {
                                    background: "#101010",
                                    color: "#fff"
                                }
                            });
                            navigate("/jugadores")
                        }
                    }}>Eliminar</Button>)}
                </form>
            </div>
        </div>
    )
}