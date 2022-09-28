import React, {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
    const [state, setState] = useState({
        user: "",
        password: "",
    })
    
    const navigate = useNavigate()

    function  handleChange(e){
        setState(oldState => ({
            ...oldState,
            [e.target.id]: e.target.value
        }))
        
    
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:3000/userverification", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: e.target[0].value,
                password: e.target[1].value,
            })
        })
        .then(data => data.json())
        .then(res => {
            res[0].username ?
            navigate("/"):
            console.log("Not valid accout")
            console.log(res)
        })
        .catch(err => console.error(err))
    }

    useEffect(()=>{
    },[state])

        return (
        <>
            <div className="navbar">
                <div className="navbar-brand">
                    <span>
                        <a href="/">Tre<strong>kit</strong></a>
                    </span>
                </div>
            </div>
                <div className="container">
                    <div className="login-text">
                        <p>Inicie sesion para ingresar a TreKIT</p>
                    </div>
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            <div className="form-div">
                                <label for="username">Usuario o correo electrónico</label>
                                <input onChange={handleChange} value={state.user} className="form-control" id="user" />
                            </div>    
                            <div className="form-div">
                                <label for="password">Usuario</label>
                                <input onChange={handleChange} value={state.password} type="password" className="form-control" id="password" />
                            </div>    
                            <button className="form-button">SIGUIENTE</button>
                        </form>
                        <div className="login-info">
                            <a href="/" className="login-help">¿Cómo ingreso por primera vez?</a>
                            <p className="login-terms">Al ingresar en la plataforma el usuario estará aceptando los <strong>términos y Condiciones</strong> de Trekit.</p>
                        </div>
                    </div>
                </div>
        </>
        );
    }
    
  export default Login;