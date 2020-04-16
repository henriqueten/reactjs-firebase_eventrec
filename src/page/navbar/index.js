import React from "react";

import { useSelector, useDispatch } from 'react-redux';

import { Navbar, Nav, Form, FormLabel } from "react-bootstrap";

import Logo from "../../image/logo.png";

import "./styles.css";


export default function NavBar() {

    const dispatch = useDispatch();

    return (
        <>



            <Navbar bg="light" expand="lg" className="bg_navbar ">
                <Navbar.Brand href="/">
                    <img className="logoImg" src={Logo} alt="Logo" />
                </Navbar.Brand>                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                 {useSelector(state => state.usuarioLogado) > 0 ? <>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>

                     

                            <Nav.Link href="/cadastro/evento">Publicar Evento</Nav.Link>
                            <Nav.Link href="/postagem/eventos">eventos</Nav.Link>
                            <Nav.Link href="/meueventos">Meus Eventos</Nav.Link> 

                        </Nav>
                        </> : <>

                            <Form inline >
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
                                            Criar conta
                                </Nav.Link>
                                    </Nav>
                                </FormLabel>

                                <div
                                    href="/"
                                    onClick={() => dispatch({ type: 'LOG_OUT' })}>
                                    <span className="fas fa-power-off justIcon" />
                                </div> 

                            </Form></>}
                </Navbar.Collapse>
            </Navbar>
        </>);
}