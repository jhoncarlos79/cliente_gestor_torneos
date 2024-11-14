import { set, useForm } from 'react-hook-form'
import { useNavigate, useParams } from  'react-router-dom'
import { useEffect } from 'react';
import { createInscripcione, updateInscripcione, deleteInscripcione, getInscripcione } from '../api/inscripcione.api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { EquipoCombo } from "../components/equipoCombo";
import { TorneoCombo } from "../components/torneoCombo"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function InscripcioneForm(){
    const {register, handleSubmit, setValue, formState:{
        errors
    }}=useForm();
    
    const navigate = useNavigate();
    const param = useParams();

    //console.log(param);
    
    const onSubmit = handleSubmit(async data => {
        //console.log(data);
        if( param.id ){  // validacion para saber si voy a crear un libro o modificarlo
            //console.log("Modificando...");
            const res=await updateInscripcione(param.id, data);  // Actualizar un inscripcione
        }else{
            const res=await createInscripcione(data);  // Crear un inscripcione
            //console.log(res);
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
            <h1>FORMULARIO INSCRIPCION</h1>
            <form on onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Equipo</Form.Label>
                    <EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                    <Form.Text className="text-muted">
                        {errors.id_equipo && "El equipo es requerido"}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Torneo</Form.Label>
                    <TorneoCombo register={register} setValue={setValue}/>
                    <Form.Text className="text-muted">
                        {errors.id_torneo && "El torneo es requerido"}
                    </Form.Text>
                </Form.Group>  
                <Button variant="primary" type="submit">
                    Guardar
                </Button><br />
                {/*<EquipoCombo register={register} setValue={setValue} campo="id_equipo"/>
                {<input type="number" placeholder='id_equipo' {...register("id_equipo", {required: true})}/>}
                {errors.id_equipo && <span>El id del equipo es requerido</span>}
                <TorneoCombo register={register} setValue={setValue}/>
                {<input type="number" placeholder='id_torneo' {...register("id_torneo", {required: true})}/>}
                {errors.id_torneo && <span>El id de torneo es requerido</span>}
                <button>Guardar</button>*/}
            </form>
            {param.id && (
                <Button variant="primary" onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar la inscripcion?");
                    if (accepted){
                        await deleteInscripcione(param.id);  // Eliminar una Inscripcion
                        navigate("/inscripciones")
                    }
                }}>Borrar</Button>)}
            {/*param.id && (
                <button onClick={async() => {
                    const accepted = window.confirm("¿Desea Eliminar la inscripcion?");
                    if (accepted){
                        await deleteInscripcione(param.id);  // Eliminar una Inscripcion
                        navigate("/inscripciones")
                    }
                }}>Borrar</button>)*/}
        </div>
    )
}