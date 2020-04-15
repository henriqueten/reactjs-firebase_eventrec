import React from 'react';

import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';





export default function NewLogin() {

    return (

        <>
            <Form>
                <Card className="jack" >
                    <Card.Header >
                        <Card.Title className="positionTitle">
                            <span className="fas fa-key iconMargin" />
                    Cadastro
                </Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <div className=" imgPosition">
                        </div>
                        <Form.Row  >
                            <Form.Control placeholder="E-Mail" className="justInput" />
                            <Form.Control placeholder="Senha" className="justInput" />
                        </Form.Row>
                        <Button className="btnLog col-md-12">Logar</Button>

                    </Card.Body>
                    <Form.Group className="justText" >
                        <Link to="/resgatar/senha" className="mx-2 textStyle">Recuperar Senha</Link>


                    </Form.Group>

                </Card>
            </Form>

        </>
    )

}



