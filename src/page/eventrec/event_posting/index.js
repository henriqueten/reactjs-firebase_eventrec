import React, { useState, useEffect }  from "react";

import firebase from "../../../firebase";

import { Card, Button, Form, Modal } from "react-bootstrap";


import "./styles.css";

export default function EventPost({id, img, titulo, tipo, detalhe, data, hora, visualizacoes}) {

    const [urlImagem, setUrlImagem] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    //const [carregando, setCarregando] = useState();
    //const [msgTipo, setMsgTipo] = useState();
    const [tituloNovo, setTitulo] = useState(titulo);
    const [tipoNovo, setTipo] = useState(tipo);
    
    const [detalheNovo, setDetalhe] = useState(detalhe);
    const [dataNovo, setData] = useState(data);
    const [horaNovo, setHora] = useState(hora);
    const [fotoNovo, setFoto] = useState(img);


    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ tituloNovo,
            tipoNovo,
            detalheNovo,
            dataNovo,
            horaNovo,
            fotoNovo,}))

    }

    //const [excluido, setExcluido] = useState(0);

    const db = firebase.firestore();
    const storage = firebase.storage();

    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url))

    });

    function remover() {
        db.collection('eventos').doc(id).delete().then(() => {
            alert('sucesso')

        }).catch(erro => {
            alert('erro');
        });
    }

    function atualizar() {

        db.collection('eventos').doc(id).update({
            titulo: tituloNovo,
                tipo: tipoNovo,
                detalhe: detalheNovo,
                data: dataNovo,
                hora: horaNovo,
                
                visualizacoes: 0,
                foto: fotoNovo,
                publico: 1,
          


            //precisar criar a atualização da foto e demais campos

        }).then(() => {
            alert('sucesso')
        }).catch(erro => {
            alert('erro');
        });
    }

    return (<>

        <Form onSubmit={handlerSubmit}>

            <Card style={{ width: '18rem' }} className="justCard">
                <Card.Img
                    variant="top"
                    src={urlImagem}
                    alt="imagem do evento" />
                <Card.Body>
                    <Card.Title>
                        {titulo}
                    </Card.Title>
                    <Card.Text>
                        {detalhe}
                    </Card.Text >
                    <div className="text-center">
                        <Button onClick={handleShow} className="btnColor">Go somewhere</Button>
                    </div>
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
                                <Card.Title className="positionTitle">
                                    {titulo}
                                </Card.Title>
                            </Card.Header>

                            <Card.Body>

                                <Form.Row>
                                    <Form.Group className="col-md-12">
                                        <Form.Label >Título</Form.Label>
                                        <Form.Control onChange={(e) => setTitulo(e.target.value)} placeholder={titulo} />
                                    </Form.Group>

                                    <Form.Group className="col-md-6">
                                        <Form.Label>Tipo do Evento</Form.Label>
                                        <Form.Control onChange={(e) => setTipo(e.target.value)} placeholder={tipo} ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-md-12">
                                        <Form.Label>Descrição do Evento</Form.Label>
                                        <Form.Control onChange={(e) => setDetalhe(e.target.value)} as="textarea" placeholder={detalhe} ></Form.Control>
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
                    <Button
                        variant="danger"
                        onClick={remover}>
                        Remover
                    </Button>
                    <Button
                        variant="primary"
                        onClick={atualizar}
                        className="justBtn">
                        Atualizar Evento
                    </Button>
                </Modal.Footer>

            </Modal>

        </Form>
    </>);
}