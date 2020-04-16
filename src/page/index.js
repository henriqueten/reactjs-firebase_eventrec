import React, { useState, useEffect } from 'react';
import firebase from "../firebase";

import EventPost from "../page/eventrec/event_posting"

export default function Main(){
    const [eventos, setEventos] = useState([]);
    let listaeventos = [];

    useEffect(() => {
        firebase.firestore().collection('eventos').get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaeventos.push({
                    id:  doc.id,
                    ...doc.data()
                })
            })

            setEventos(listaeventos);
        })
    })

    return(
        <>
      
        <div className="row p-3">
         { eventos.map( item => <EventPost key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} tipo={item.tipo} detalhes={item.detalhes} data={item.data} hora={item.hora} visualizacoes={item.visualizacoes} /> )  } 
       </div>
        </>
    )
}