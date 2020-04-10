import React, { useState, useEffect, useSelector } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import { Card, Button, Modal, Form } from "react-bootstrap";

import './style.css';

function EventoCard({ id, img, titulo, tipo, detalhes, data, hora, visualizacoes }) {

    const [urlImagem, setUrlImagem] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    const [carregando, setCarregando] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [tituloNovo, setTitulo] = useState(titulo);
    const [tipoNovo, setTipo] = useState(tipo);
    const [detalhesNovo, setDetalhes] = useState(detalhes);
    const [dataNovo, setData] = useState(data);
    const [horaNovo, setHora] = useState(hora);
    const [fotoNovo, setFoto] = useState();

    const [excluido, setExcluido] = useState(0);

    const db = firebase.firestore();
    const storage = firebase.storage();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url))

    });

    function remover(){
        db.collection('eventos').doc(id).delete().then(() => {
            alert('sucesso')
         }).catch(erro => {
             alert('erro');
     });
    }
    
    function atualizar(){
        
            db.collection('eventos').doc(id).update({
                titulo: tituloNovo,
                tipo: tipoNovo,
                detalhes: detalhesNovo,
                data: dataNovo,
                hora: horaNovo,

                //precisar criar a atualização da foto e demais campos
   
        }).then(() => {
           alert('sucesso')
        }).catch(erro => {
            alert('erro');
    });
    }

    return (
        <>
            <Card className="justCard">
                <Card.Img className="justImg" src={urlImagem} alt="Imagem do Evento" />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {detalhes}
                    </Card.Text>
                    <Button className="justBtn" variant="primary" onClick={handleShow} > DETALHES</Button>
                </Card.Body>
            </Card>
    
          <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton />
              <Modal.Title className="text-center">Detalhes do Evento</Modal.Title>
              <Card.Img className="justImg" src={urlImagem} alt="Imagem do Evento" />
            <Modal.Body>

            <Form>
                <Card className="containerCard" >
                    <Card.Header >
                        <Card.Title className="positionTitle">{titulo}</Card.Title>
                    </Card.Header>
                    <Card.Body>

                        <Form.Row>
                            <Form.Group className="col-md-12">
                                <Form.Label >Título</Form.Label>
                                <Form.Control onChange={(e) => setTitulo(e.target.value)} placeholder={titulo} />
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Tipo do Evento</Form.Label>
                                <Form.Control onChange={(e) => setTipo(e.target.value) }  placeholder={tipo} ></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-12">
                                <Form.Label>Descrição do Evento</Form.Label>
                                <Form.Control onChange={(e) => setDetalhes(e.target.value)} as="textarea" placeholder={detalhes} ></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Data</Form.Label>
                                <Form.Control onChange={(e) => setData(e.target.value)} placeholder={data}></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Hora</Form.Label>
                                <Form.Control onChange={(e) => setHora(e.target.value)} placeholder={hora}></Form.Control>
                            </Form.Group>

                            <Form.Group className="col-md-6">
                                <Form.Label>Folder do Evento</Form.Label>
                                <Form.Control onChange={(e) => setFoto(e.target.files[0])} className="inputBord" type="file" ></Form.Control>
  
                            </Form.Group>
                        </Form.Row>
                    </Card.Body>


                </Card>

            </Form>

            </Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={remover} onClick={handleClose}>
                Remover
              </Button>
              <Button variant="primary" onClick={atualizar} className="justBtn" > 
                Atualizar Evento
              </Button>
            </Modal.Footer>
          </Modal>

        </>
        )
}

export default EventoCard;
