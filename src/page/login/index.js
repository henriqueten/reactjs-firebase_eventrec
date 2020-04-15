import React from 'react';
import Logo from "../../image/logo.png";
import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';


import "./styles.css";


function Login() {

    return (

        <>

            <Card className="jack" >

                <Card.Body>
                    <div className=" imgPosition">
                        <img className="logoImg " src={Logo} alt="Logo" />
                    </div>
                    <Form.Row  >
                        <Form.Control placeholder="E-Mail" className="justInput" />
                        <Form.Control placeholder="Senha" className="justInput" />
                    </Form.Row>
                    <Button className="btnLog col-md-12">Logar</Button>

                </Card.Body>
                <Form.Group className="justText" >
                    <Link to="/resgatar/senha" className="mx-2 textStyle">Recuperar Senha</Link>

                    <Link to="/nova/senha" className="mx-2 textStyle">Cadastrar Senha</Link>
                </Form.Group>

            </Card>

        </>
    )

}



export default Login;