import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { Form, Card, Button } from "react-bootstrap";

import firebase from '../../../firebase';
import 'firebase/auth'

export default function GetLogin() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();


    const handlerEmailChange = event => setEmail(event.target.value)

    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ email }))
    }

    function recuperarSenha() {
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email para você redefinir sua senha')
        }).catch(erro => {
            setMsg("Verifique se o email está correto")
        })
    }



    return (<>


        <Form onSubmit={handlerSubmit}>
            <Card className="jack" >
                <Card.Header >
                    <Card.Title className="positionTitle">
                        <span className="fas fa-key iconMargin" />
                   Recuperar senha
                </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Form.Row  >
                        <Form.Control name="email"
                            type="email"
                            placeholder="Informe o Email"
                            className="justInput"
                            onChange={handlerEmailChange}
                            className="justInput" />
                    </Form.Row>

                    <div >
                        <span>{msg}</span>
                    </div>
                    <Button onClick={recuperarSenha} type="submit" className="btnLog col-md-12">Logar</Button>

                </Card.Body>
                <Form.Group className="justText" >


                    <Link to="/nova/senha" className="mx-2 textStyle">Cadastrar Senha</Link>
                </Form.Group>

            </Card>
        </Form>
    </>);
}