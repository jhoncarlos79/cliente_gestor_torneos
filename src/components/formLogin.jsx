import { useState } from "react";
import { tokenApi } from "../api/token.api"
import { useNavigate } from "react-router-dom"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export function FormLogin({route, method}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "login" : "register"

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        try {
            const res = await tokenApi.post(route, {email, password});
            console.log(res);
            if (method === "login"){
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh)
                navigate("/");
            } else {
                navigate("/login");
            }
        } catch (error) {
            alert(error);
        } finally{
            setLoading(false)
        }
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <form onSubmit={handleSubmit}>
                <h1>{name}</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Direccion de Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Ingrese el email" />
                    <Form.Text className="text-muted">
                        Nosotros nunca compartiremos tu email con nadie.
                    </Form.Text>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Contraseña" />
                </Form.Group>
                <Button variant="primary" type="submit">
                {name}
                </Button>        
            </form>
        </div>
    )
}