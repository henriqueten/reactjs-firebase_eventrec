import React, { useState, useEffect } from 'react';
import firebase from "../firebase";
import { useSelector, useDispatch } from 'react-redux';

import EventPost from "../page/eventrec/event_posting"

export default function Main(){
    const dispatch = useDispatch();
    const [eventos, setEventos] = useState([]);
    let listaeventos = [];
    const logado = useSelector(state => state.usuarioLogado);
    var email = useState();
    
    if(firebase.auth().currentUser != null && logado == 0){
      email = firebase.auth().currentUser.email ;
      dispatch( {type: 'LOG_IN', usuarioEmail: email}
       )
    }
    

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
         { eventos.map( item => <EventPost key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} tipo={item.tipo} detalhe={item.detalhe} data={item.data} hora={item.hora} visualizacoes={item.visualizacoes} /> )  } 
       </div>
        </>
    )
}