import React, { useState } from 'react';

import firebase from "../../../firebase";
import 'firebase/auth';

import { Link } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';

export default function NewLogin() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    

    function cadastrar() {
        setCarregando(1);

        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo('Erro');
            setMsg('Você precisa informar o email e senha para fazer o cadastro');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha).then(resultado => {
            setCarregando(0);
            setMsgTipo('Sucesso');

        }).catch(erro => {
            setCarregando(0);
            setMsgTipo('Erro');
            switch (erro.message) {
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter pelo menos 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo utilizado por outro usuário');
                    break;
                case 'The email address is badly formatted.':
                    setMsg('O formato do seu email é inválido!');
                    break;

                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
        })
    }



    const handlerEmailChange = event => setEmail(event.target.value)
    const handlerSenhaChange = event => setSenha(event.target.value)


    const handlerSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify({ email, senha }))
    }



    return (

        <>
            <Form onSubmit={handlerSubmit}>
                <Card className="jack" >
                    <Card.Header >
                        <Card.Title className="positionTitle">
                            <span className="fas fa-key iconMargin" />
                    Cadastro
                </Card.Title>
                    </Card.Header>

                    <Card.Body>
                        <div className=" imgPosition">
                        </div>
                        <Form.Row  >
                            <Form.Control
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="justInput"
                                onChange={handlerEmailChange} />
                            <Form.Control
                                name="senha"
                                type="password"
                                placeholder="Senha"
                                className="justInput"
                                onChange={handlerSenhaChange} />
                        </Form.Row>
                        {
                        carregando ? <div class="spinner-border text-danger" role="status"> <span class="sr-only">Loading...</span></div> :
                        <Button type="submit" onClick={cadastrar} className="btnLog col-md-12">Logar</Button>
                        }
                        <div>
                            {msgTipo === 'Sucesso' && <span> Usuário cadastrado com Sucesso!</span>}
                            {msgTipo === 'Erro' && <span> {msg}</span>}

                        </div>
                    </Card.Body>
                    <Form.Group className="justText" >
                        <Link to="/resgatar/senha" className="mx-2 textStyle">Recuperar Senha</Link>


                    </Form.Group>

                </Card>
            </Form>

        </>
    )

}



