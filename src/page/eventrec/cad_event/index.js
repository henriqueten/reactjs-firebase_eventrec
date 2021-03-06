import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import firebase from "../../../firebase";

import { Form, Card, Button } from "react-bootstrap";

import EventPost from "../event_posting";


import "./styles.css";



export default function CadEvent() {

    const [titulo, setTitulo] = useState('')
    const [tipo, setTipo] = useState('')
    const [detalhe, setDetalhe] = useState('')
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const usuarioEmail = useSelector(state => state.usuarioEmail);
    const [carregando, setCarregando] = useState('');
    const [foto, setFoto] = useState();
    const [msgTipo, setMsgTipo] = useState('');

    const handlerSubmit = event => {
        event.preventDefault()
      

    }


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

         
        })
    })

 

    function cadastrar() {
        setMsgTipo(null);
        setCarregando(0);

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
                                        onChange={(e) => setTitulo(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Tipo do Evento</Form.Label>
                                    <Form.Control
                                        name="tipo"
                                        type="string"
                                        placeholder="Informe um título"
                                        onChange={(e) => setTipo(e.target.value)}>


                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-12">
                                    <Form.Label>Descrição do Evento</Form.Label>
                                    <Form.Control
                                        name="detalhe"
                                        type="string"
                                        as="textarea"
                                        onChange={(e) => setDetalhe(e.target.value)}
                                        placeholder="Descrição"></Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Data do Evento</Form.Label>
                                    <Form.Control
                                        name="detalhe"
                                        type="date"
                                        placeholder="Informe um título"
                                        onChange={(e) => setData(e.target.value)}>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                    <Form.Label>Hora do Evento</Form.Label>
                                    <Form.Control
                                        name=""
                                        type="time"
                                        placeholder="Informe um título"
                                        onChange={(e) => setHora(e.target.value)} >
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="col-md-6">
                                <Form.Label>Folder do Evento</Form.Label>
                                <Form.Control onChange={(e) => setFoto(e.target.files[0])} className="inputBord" type="file" ></Form.Control>
                                {
                            carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"> <span class="sr-only">Loading...</span></div>
                                : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                               }
                            </Form.Group>

                            </Form.Row>

                        </Card.Body>
                    </Card>
                </Form>



            </Form>
        </>
    );
}