import React, { useState, useEffect }  from "react";

import firebase from "../../../firebase";

import { Card, Button, Form, Modal } from "react-bootstrap";


import "./styles.css";

export default function EventPost(id, img, titulo, tipo, detalhes, data, hora, visualizacoes) {

    const [urlImagem, setUrlImagem] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);

    //const [carregando, setCarregando] = useState();
    //const [msgTipo, setMsgTipo] = useState();
    const [tituloNovo, setTitulo] = useState(titulo);
    const [tipoNovo, setTipo] = useState(tipo);
    const [detalhesNovo, setDetalhes] = useState(detalhes);
    const [dataNovo, setData] = useState(data);
    const [horaNovo, setHora] = useState(hora);
    const [fotoNovo, setFoto] = useState(img);


    const handlerTituloNovoChange = event => setTitulo(event.target.value)
    const handlerTipoNovoChange = event => setTipo(event.target.value)
    const handlerDetalhesNovoChange = event => setDetalhes(event.target.value)
    const handlerDataNovoChange = event => setData(event.target.value)
    const handlerHoraNovoChange = event => setHora(event.target.value)
    const handlerFotoNovoChange = event => setFoto(event.target.files[0])


    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ tituloNovo,
            tipoNovo,
            detalhesNovo,
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

        if (fotoNovo)
            storage.ref(`imagens/${fotoNovo.name}`).put(fotoNovo)


        db.collection('eventos').doc(id).update({
            titulo: tituloNovo,
            tipo: tipoNovo,
            detalhes: detalhesNovo,
            data: dataNovo,
            hora: horaNovo,
            foto: fotoNovo.name

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
                        {detalhes}
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
                                        <Form.Control onChange={handlerTituloNovoChange} placeholder={titulo} />
                                    </Form.Group>

                                    <Form.Group className="col-md-6">
                                        <Form.Label>Tipo do Evento</Form.Label>
                                        <Form.Control onChange={handlerTipoNovoChange} placeholder={tipo} ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-md-12">
                                        <Form.Label>Descrição do Evento</Form.Label>
                                        <Form.Control onChange={handlerDetalhesNovoChange} as="textarea" placeholder={detalhes} ></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-md-6">
                                        <Form.Label>Data</Form.Label>
                                        <Form.Control onChange={handlerDataNovoChange} placeholder={data}></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-md-6">
                                        <Form.Label>Hora</Form.Label>
                                        <Form.Control onChange={handlerHoraNovoChange} placeholder={hora}></Form.Control>
                                    </Form.Group>

                                    <Form.Group className="col-md-6">
                                        <Form.Label>Folder do Evento</Form.Label>
                                        <Form.Control onChange={handlerFotoNovoChange} className="inputBord" type="file" ></Form.Control>
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