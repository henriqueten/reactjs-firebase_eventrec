import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Card } from "react-bootstrap";

import Navbar from '../navbar';
import EventoCard from "../evento-card";

import firebase from '../../firebase';

import "./styles.css";


function EventoCadastro() {
    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    //lista dos itens cadastrados
    const [eventos, setEventos] = useState([]);
    let listaeventos = [];

    const storage = firebase.storage();
    const db = firebase.firestore();

    //lista dos itens cadastrados
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
                detalhes: detalhes,
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
            <Navbar />


            <Form>
                <Card className="containerCard" >
                    <Card.Header >
                        <Card.Title className="positionTitle">Novo Eventos</Card.Title>
                    </Card.Header>
                    <Card.Body>

                        <Form.Row>
                            <Form.Group className="col-md-6">
                                <Form.Label >Título</Form.Label>
                                <Form.Control onChange={(e) => setTitulo(e.target.value)} placeholder="Informe um título" />
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Tipo do Evento</Form.Label>
                                <Form.Control onChange={(e) => setTipo(e.target.value)} /*as="select"*/ ></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-12">
                                <Form.Label>Descrição do Evento</Form.Label>
                                <Form.Control onChange={(e) => setDetalhes(e.target.value)} as="textarea" ></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Tipo do Evento</Form.Label>
                                <Form.Control onChange={(e) => setData(e.target.value)} type="date" ></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Tipo do Evento</Form.Label>
                                <Form.Control onChange={(e) => setHora(e.target.value)} type="time" ></Form.Control>
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
            <Form>
            <Card className="containerCard" >
                    <Card.Header >
                        <Card.Title className="positionTitle">Novo Eventos</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Form.Row>
                        {eventos.map(item => <EventoCard key={item.id} id={item.id} img={item.foto} titulo={item.titulo} detalhes={item.detalhes} visualizacoes={item.visualizacoes} />)}
                        </Form.Row>

                    </Card.Body>

                </Card>
            </Form>




            <div className="col-12 mt-5">
                <div className="row">
                    <h3 className="mx-auto font-weight-bold">Novo Eventos</h3>
                </div>

                <form>
                    <div className="form-group">
                        <label>Título:</label>
                        <input onChange={(e) => setTitulo(e.target.value)} type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <select onChange={(e) => setTipo(e.target.value)} className="form-control">
                            <option disabled selected value>-- Selecione um tipo --</option>
                            <option>Festa</option>
                            <option>Teatro</option>
                            <option>Show</option>
                            <option>Evento</option>
                            <option>Curso</option>
                            <option>Palestra</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Descrição do Evento:</label>
                        <textarea onChange={(e) => setDetalhes(e.target.value)} className="form-control" rows="3" />
                    </div>

                    <div className="form-group row">
                        <div className="col-6">
                            <label>Data:</label>
                            <input onChange={(e) => setData(e.target.value)} type="date" className="form-control" />
                        </div>

                        <div className="col-6">
                            <label>Hora:</label>
                            <input onChange={(e) => setHora(e.target.value)} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Upload da Foto:</label>
                        <input onChange={(e) => setFoto(e.target.files[0])} type="file" className="form-control" />
                    </div>

                    <div className="row">
                        {
                            carregando > 0 ? <div class="spinner-border text-danger mx-auto" role="status"> <span class="sr-only">Loading...</span></div>
                                : <button onClick={cadastrar} type="button" className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro">Publicar Evento</button>
                        }
                    </div>
                </form>

                <div className="msg-login  text-center mt-2">
                    {msgTipo === 'Sucesso' && <span><strong>WoW!</strong> Evento Publicado! &#128526;</span>}

                    {msgTipo === 'Erro' && <span><strong>Ops!</strong> Não foi possível publicar o Evento &#128546;</span>}

                </div>

            </div>
        </>
    )
}

export default EventoCadastro;