import React, { useState } from "react";

import { Form, Card, Button } from "react-bootstrap";


import "./styles.css";



export default function CadEvent() {

    const [titulo, updateTitulo] = useState('')
    const [tipo, updateTipo] = useState('')
    const [detalhe, updateDetalhe] = useState('')
    const [data, updateData] = useState('')
    const [hora, updateHora] = useState('')
    const [foto, updateFoto] = useState('')

    const handlerSubmit = (event, props) => {
        event.preventDefault()
        alert(JSON.stringify({ titulo, tipo, detalhe, data, hora, foto }))


     }

    const handlerTituloChange = event => updateTitulo(event.target.value)
    const handlerTipoChange = event => updateTipo(event.target.value)
    const handlerDetalheChange = event => updateDetalhe(event.target.value)
    const handlerDataChange = event => updateData(event.target.value)
    const handlerHoraChange = event => updateHora(event.target.value)
    const handlerFotoChange = event => updateFoto(event.target.value)








    return (
        <>

            <Form onSubmit={handlerSubmit}>

                <Form>
                    <Card className="containerCard" >
                        <Card.Header >
                            <Card.Title className="positionTitle">
                                <span className="fas fa-edit iconMargin" />
                                Novo Eventos
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>

                            <Form.Row>
                                <Form.Group className="col-md-6">
                                    <Form.Label >Título</Form.Label>
                                    <Form.Control
                                        name=""
                                        type=""
                                        placeholder="Informe um título"
                                        onChange={handlerTituloChange} />
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Tipo do Evento</Form.Label>
                                    <Form.Control
                                       type="string"
                                        name="tipoEvento"
                                     
                                        placeholder="Informe um título"
                                        onChange={handlerTipoChange}>
                                      

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-12">
                                    <Form.Label>Descrição do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type=""
                                        placeholder="Informe um título"
                                        onChange={handlerDetalheChange}
                                        placeholder="Descrição"></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Data do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type="date"
                                        placeholder="Informe um título"
                                        onChange={handlerDataChange}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Hora do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type="time"
                                        placeholder="Informe um título"
                                        onChange={handlerHoraChange} >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Folder do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type="file"
                                        onChange={handlerFotoChange}
                                        className="inputBord" >
                                    </Form.Control>
                                </Form.Group>

                                <Button type="submit">
                                    ok
                                </Button>
                            </Form.Row>

                        </Card.Body>
                    </Card>
                </Form>

                <Form>
                    <Card className="containerCard" >
                        <Card.Header >
                            <Card.Title className="positionTitle">
                                <span className="fas fa-list-ul iconMargin" />
                            Lista de eventos cadastrados
                         </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                            </Form.Row>

                        </Card.Body>

                    </Card>
                </Form>

            </Form>
        </>
    );
}