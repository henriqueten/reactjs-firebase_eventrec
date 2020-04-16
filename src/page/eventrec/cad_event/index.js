import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import firebase from "../../../firebase";

import { Form, Card, Button } from "react-bootstrap";

import EventPost from "../event_posting";


import "./styles.css";



export default function CadEvent() {

    const [titulo, updateTitulo] = useState('')
    const [tipo, updateTipo] = useState('')
    const [detalhe, updateDetalhe] = useState('')
    const [data, updateData] = useState('')
    const [hora, updateHora] = useState('')
    const [foto, updateFoto] = useState('')
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState();
    const [setMsgTipo] = useState();

    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ titulo, tipo, detalhe, data, hora, foto }))

    }

    const handlerTituloChange = event => updateTitulo(event.target.value)
    const handlerTipoChange = event => updateTipo(event.target.value)
    const handlerDetalheChange = event => updateDetalhe(event.target.value)
    const handlerDataChange = event => updateData(event.target.value)
    const handlerHoraChange = event => updateHora(event.target.value)
    const handlerFotoChange = event => updateFoto(event.target.value)


    const [setEventos] = useState([]);
    let listaeventos = [];

    const storage = firebase.storage();
    const db = firebase.firestore();

    useEffect(() => {
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaeventos.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setEventos(listaeventos);
        })
    })

    function cadastrar() {
        setMsgTipo(null)
        setCarregando(1);

        storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
            db.collection('eventos').add({
                titulo: titulo,
                tipo: tipo,
                detalhe: detalhe,
                data: data,
                hora: hora,
                usuario: usuarioEmail,
                visualizacoes: 0,
                foto: foto.name,
                publico: 1,
                criacao: new Date()

            }).then(() => {
                setMsgTipo('Sucesso');
                setCarregando(0);
            }).catch(erro => {
                setMsgTipo('Erro');
                setCarregando(0);
            });

        });

    }




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
                                        name="titulo"
                                        type="string"
                                        placeholder="Informe um título"
                                        onChange={handlerTituloChange} />
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Tipo do Evento</Form.Label>
                                    <Form.Control
                                        name="tipo"
                                        type="string"
                                        placeholder="Informe um título"
                                        onChange={handlerTipoChange}>


                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-12">
                                    <Form.Label>Descrição do Evento</Form.Label>
                                    <Form.Control
                                        name="detalhe"
                                        type="string"
                                        as="textarea"
                                        onChange={handlerDetalheChange}
                                        placeholder="Descrição"></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Data do Evento</Form.Label>
                                    <Form.Control
                                        name="detalhe"
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

                                <Form.Group className="col-md-12">
                                    <Form.Label>Folder do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type="file"
                                        onChange={handlerFotoChange}
                                        className="inputBord" >
                                    </Form.Control>
                                </Form.Group>

                                {
                                    carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status">
                                        <span class="sr-only">Loading...</span></div>
                                        : <Button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</Button>
                                }


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
                                <EventPost />     
                            </Form.Row>

                        </Card.Body>

                    </Card>
                </Form>

            </Form>
        </>
    );
}