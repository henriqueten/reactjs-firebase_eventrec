import React from "react";

import { Form, Card } from "react-bootstrap";

export default function MyEvent(){
    return(<><Form>
        <Card className="containerCard" >
            <Card.Header >
                <Card.Title className="positionTitle">
                    <span className="fas fa-list-ul iconMargin" />
                    Meus eventos
                 </Card.Title>
            </Card.Header>
            <Card.Body>
                <Form.Row>
                    {/* {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}*/}
                </Form.Row>

            </Card.Body>

        </Card>
    </Form></>);
}