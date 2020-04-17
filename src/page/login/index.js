
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import firebase from "../../firebase";
import 'firebase/auth';

import { Link, Redirect } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';

import Logo from "../../image/logo.png";
import ApisLogin from './apis_login/index';
import "./styles.css";


export default function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();


    const handlerEmailChange = event => setEmail(event.target.value)
    const handlerSenhaChange = event => setSenha(event.target.value)
    


    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ email, senha, msgTipo }))
    }

    const dispatch = useDispatch();

     function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('Sucesso');
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', usuarioEmail: email })
            }, 2000);

        }).catch(erro => {
            setMsgTipo('Erro');
        });

    }
   
    return (

        <>
        <div>
      
        
            <Form onSubmit={handlerSubmit}>
            {
                    useSelector(state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
                }

                <Card className="jack" >

                    <Card.Body>
                        <div className=" imgPosition">
                            <img className="logoImg " src={Logo} alt="Logo" />
                        </div>
                        <Form.Row  >
                            <Form.Control name="email"

                                placeholder="E-Mail"
                                className="justInput"
                                onChange={handlerEmailChange} />

                            <Form.Control
                                name="senha"
                                type="password"
                                placeholder="Senha"
                                className="justInput"
                                onChange={handlerSenhaChange} />
                        </Form.Row>

                        <Button type="submit" onClick={logar} className="btnLog col-md-12">Logar</Button>
                        
                        <div>
                            {msgTipo === 'Sucesso' && <span> Você está conectado </span>}

                            {msgTipo === 'Erro' && <span> Verifique se a senha ou usuário estão corretos </span>}
                        </div>

                        { msgTipo !== 'Sucesso' && <ApisLogin/> }
                    </Card.Body>
                    <Form.Group className="justText" >
                        <Link to="/resgatar/senha" className="mx-2 textStyle">Recuperar Senha</Link>

                        <Link to="/nova/senha" className="mx-2 textStyle">Cadastrar Senha</Link>
                    </Form.Group>

                </Card>
            </Form>
</div>
        </>
    )

}

