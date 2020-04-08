import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import store from '../src/Store';
import { Provider } from 'react-redux';

import EventoCadastro from "./page/evento-cadastro";
import EventoCard from "./page/evento-card";
import Home from "./page/home";
import Login from "./page/login";
import NovoUsuario from "./page/login/usuario-novo";
import UsuarioRecuperarSenha from "./page/login/usuario-recuperar-senha";
import Navbar from "./page/navbar";
import Myevent from "./page/my-event";

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
            <Route exact path="/meuevento" component={Myevent } />

          </Switch>
        </BrowserRouter>
      </Provider>
    </>);
}


