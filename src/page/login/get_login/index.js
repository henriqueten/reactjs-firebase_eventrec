import React from "react";
import { Link } from 'react-router-dom';
import { Form, Card, Button} from "react-bootstrap";

export default function GetLogin() {
    return (<>


        <Form>
            <Card className="jack" >
                <Card.Header >
                    <Card.Title className="positionTitle">
                        <span className="fas fa-key iconMargin" />
                   Recuperar senha
                </Card.Title>
                </Card.Header>

                <Card.Body>
                    <Form.Row  >
                       
                        <Form.Control placeholder="Informe um E-Mail" className="justInput" />
                    </Form.Row>
                    <Button className="btnLog col-md-12">Logar</Button>

                </Card.Body>
                <Form.Group className="justText" >
                

                    <Link to="/nova/senha" className="mx-2 textStyle">Cadastrar Senha</Link>
                </Form.Group>

            </Card>
        </Form>
    </>);
}