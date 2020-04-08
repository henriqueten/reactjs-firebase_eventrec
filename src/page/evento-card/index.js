import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import { Card, Button} from "react-bootstrap";

import './style.css';

function EventoCard({ id, img, titulo, detalhes, visualizacoes }) {

    const [urlImagem, setUrlImagem] = useState();


    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url))

    });
    return (
<>
        <Card className="justImg">
            <Card.Img variant="top" src={urlImagem} alt="Imagem do Evento" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

        <div className="col-md-3 col-sm-12">
            <img src={urlImagem} className="card-img-top img-cartao" alt="Imagem do Evento" />

            <div className="card-body">

                <h5>{titulo}</h5>
                <p className="card-text text-justify">{detalhes}</p>

                <div className="row rodape-card d-flex align-items-center">

                    <div className="col-6">
                        <Link to={"/eventodetalhes" + id} className="btn btn-sm btn-detalhes">+ detalhes</Link>
                    </div>

                    <div className="col-6 text-right">
                        <i class="fas fa-eye"></i><span> {visualizacoes}</span>
                    </div>

                </div>

            </div>
        </div> 
        </>)
}

export default EventoCard;