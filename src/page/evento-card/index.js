import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';

import { Card, Button } from "react-bootstrap";

import './style.css';

function EventoCard({ id, img, titulo, detalhes, visualizacoes }) {

    const [urlImagem, setUrlImagem] = useState();


    useEffect(() => {
        firebase.storage().ref(`imagens/${img}`).getDownloadURL().then(url => setUrlImagem(url))

    });
    return (
        <>
            <Card className="justCard">
                <Card.Img className="justImg" src={urlImagem} alt="Imagem do Evento" />
                <Card.Body>
                    <Card.Title>{titulo}</Card.Title>
                    <Card.Text>
                        {detalhes}
                    </Card.Text>
               
              
                    <Link to={"/eventodetalhes" + id} className="justBtn"> DETALHES</Link>
                    </Card.Body>
            </Card>


        </>)
}

export default EventoCard;