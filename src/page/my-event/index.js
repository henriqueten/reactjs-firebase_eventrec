
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar';
import { useSelector } from 'react-redux';
import firebase from '../../firebase';
import EventoCard from '../evento-card';

function MyEvent(){

    const [eventos, setEventos] = useState([]);
   // const [pesquisa, setPesquisa] = useState('');
    let listaeventos = []; 
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    useEffect(() => {
        firebase.firestore().collection('eventos').where('usuario','==',usuarioEmail).get().then(async (resultado) => {
            await resultado.docs.forEach(doc => {
                listaeventos.push({
                    id:  doc.id,
                    ...doc.data()
                })
            })

            setEventos(listaeventos);
        })
    });

    return(
        <>
        <Navbar/>
        <div className="row p-3">
         { eventos.map( item => <EventoCard key={item.id}  id={item.id} img={item.foto} titulo={item.titulo} tipo={item.tipo} detalhes={item.detalhes} data={item.data} hora={item.hora} visualizacoes={item.visualizacoes} /> )  } 
       </div>
        </>
    )
}

export default MyEvent;