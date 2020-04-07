import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";



//import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/Store';
import { Provider } from 'react-redux';


import EventoCadastro from "./page/evento-cadastro";
import EventoCard from "./page/evento-card";
import Home from "./page/home";
import Login from "./page/login";
import NovoUsuario from "./page/login/usuario-novo";
import UsuarioRecuperarSenha from "./page/login/usuario-recuperar-senha";
import Navbar from "./page/navbar";


export default function Routes() {
  return (
    <>




      <Provider store={store}>
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/evento/cadastro" component={EventoCadastro} />
          <Route exact path="/evento/cadastrado" component={EventoCard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/usuario/novo" component={NovoUsuario} />
          <Route exact path="/usuario/recupera" component={UsuarioRecuperarSenha} />
          <Route exact path="/navegador" component={Navbar} />
        </Switch>
      </BrowserRouter>
    </Provider>

     
            </>);
}





/**


            <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />
      </Router>
    </Provider>

*/