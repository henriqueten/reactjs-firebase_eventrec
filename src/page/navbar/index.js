import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import Logo from "../../image/logo.png";
import "./styles.css";

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
                            <img className="logoImg" src={Logo} alt="Logo" />
                        </a>
                    </li>
                </ul>

                <ul>
                    <li>
                        <a href="/">Home</a>
                        <a href="/cadastro/evento">Publicar Evento</a>
                        <a href="/postagem/eventos">Eventos</a>
                        <a href="/meueventos">Meus Eventos</a>
                    </li>
                </ul>
                <ul>
                    <li className="positionLogin">
                        <a href="/login">
                            Login
                        </a>
                        <a href="/nova/senha">
                            Novo cadastro
                        </a>
                    </li>
                </ul>
                <ul>
                    <a to="/"
                        onClick={firebase.auth().signOut(), () => dispatch({ type: 'LOG_OUT' })}>
                        <span className="fas fa-power-off justIcon" />
                    </a>
                </ul>
            </div>
        </>
    );
}