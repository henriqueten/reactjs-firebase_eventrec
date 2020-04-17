import React, { useState }from "react";

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
            <Navbar bg="light" expand="lg" className="bg_navbar ">
                <Navbar.Brand href="/">
                    <img className="logoImg" src={Logo} alt="Logo" />
                </Navbar.Brand>                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">


                    <Nav className="mr-auto">
                    {
                     useSelector(state => state.usuarioLogado) > 0 ?
                     <>
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/cadastro/evento">Publicar Evento</Nav.Link>
                     <Nav.Link href="/postagem/eventos">Eventos</Nav.Link>
                     <Nav.Link href="/meueventos">Meus Eventos</Nav.Link>
                     </>
                     :
                     <>
                     <Nav.Link href="/">Home</Nav.Link>
                     </>
                    }       

                    </Nav>

                    <Form inline >
                    {
                     useSelector(state => state.usuarioLogado) > 0 ?
                     <>
                     <div
                            to="/"
                            onClick={ firebase.auth().signOut() ,() => dispatch({ type: 'LOG_OUT' })}>
                            <span className="fas fa-power-off justIcon" />
                        </div>
                     </>
                     :
                     <>
                        <FormLabel type="text" className="mr-sm-2">
                            <Nav className="mr-auto">
                                <Nav.Link href="/login">
                                    Login
                                </Nav.Link>
                            </Nav>
                        </FormLabel>
                        <FormLabel type="text" className="mr-sm-2" >
                            <Nav className="mr-auto">
                                <Nav.Link href="/nova/senha">
                               Cadastre uma conta
                                </Nav.Link>
                            </Nav>
                        </FormLabel>
                     </>
                    }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>);
}