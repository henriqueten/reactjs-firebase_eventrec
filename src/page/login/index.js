import React, { useState } from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';

import firebase from '../../firebase';
import 'firebase/auth'

import { useSelector, useDispatch } from 'react-redux';

function Login() {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    const dispatch = useDispatch();

function logar(){
    
    firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
        setMsgTipo('Sucesso');
        setTimeout(() => {
            dispatch( {type: 'LOG_IN', usuarioEmail: email} )
        }, 2000);
        
    }).catch(erro => {
        setMsgTipo('Erro');
    });

}

    return(
    <div className="login-content d-flex align-items-center">

        {
            useSelector( state => state.usuarioLogado) > 0 ? <Redirect to='/' /> : null
        }
        <form className="form-signin mx-auto">
            <div className="text-center mb-4">
                <img className="mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
                <i class="far fa-calendar-plus text-white fa-5x"></i>
                <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
            </div>

                <input onChange={(e) => setEmail(e.target.value) } type="email" id="inputEmail" class="form-control my-2" placeholder="Email" />
                <input onChange={(e) => setSenha(e.target.value) } type="password" id="inputPassword" class="form-control my-2" placeholder="Senha" />

            <button onClick={logar} class="btn btn-lg btn-block btn-login" type="button">Logar</button>

            <div className="msg-login text-white text-center my-5">
                 { msgTipo == 'Sucesso' && <span><strong>WoW!</strong> Você está conectado &#128526;</span> }
                    
                 { msgTipo == 'Erro' && <span><strong>Ops!</strong> Verifique se a senha ou usuário estão corretos &#128546;</span> }
                
            </div>

            <div className="opcoes-login mt-5 text-center">
              <Link to="usuariorecuperarsenha" className="mx-2">Recuperar Senha</Link>
              <span className="text-white">&#9733;</span>
              <Link to='novousuario' className="mx-2">Cadastrar Senha</Link>
            </div>
        </form>
    </div>
    )
}

export default Login;