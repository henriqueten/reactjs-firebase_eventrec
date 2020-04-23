import React, { useState } from "react";

import { useSelector, useDispatch } from 'react-redux';

import { Navbar, Nav, Form, FormLabel } from "react-bootstrap";

import Logo from "../../image/logo.png";

import "./styles.css";

import Login from "../login";

import 'firebase/auth';
import firebase from '../../firebase';

export default function NavBar() {

    const dispatch = useDispatch();

    return (
        

            <>
                <div className="navbar">
                    <ul>

                        <li>
                            <a href="/">
                    <img className="logoImg" src={Logo} alt="Logo" /></a>

                        </li>
                    </ul>

                    {
                        useSelector(state => state.usuarioLogado) > 0 ?
                            <>
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                        <a href="/cadastro/evento">Publicar Evento</a>
                                        <a href="/postagem/eventos">Eventos</a>
                                        <a href="/meueventos">Meus Eventos</a>
                                        
                                    </li>
                                </ul>
                                <ul></ul>
                                <ul>
                                <a to="/"
                                            onClick={firebase.auth().signOut(), () => dispatch({ type: 'LOG_OUT' })}>
                                            <span className="fas fa-power-off justIcon" />
                                        </a>
                                </ul>
                            </>
                            :
                            <>
                                <ul> <a href="/">Home</a></ul>
                                <ul>
                                    <li className="positionLogin">
                                        <a href="/login">Login</a>
                                        <a href="/nova/senha">Novo cadastro</a>

                                    </li></ul>
                            </>


                    }



      

                </div>
            </>




);
}