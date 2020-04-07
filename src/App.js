import React from 'react';
import Routes from "./routes";

/*Paginas
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './Store';
import { Provider } from 'react-redux';


import Login from './page/login';
import NovoUsuario from './page/login/usuario-novo';
import Home from './page/home';
import UsuarioRecuperarSenha from './page/login/usuario-recuperar-senha';
import EventoCadastro from './page/evento-cadastro';

*/

function App() {
  return (
<Routes/>

    /*
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />
      </Router>
    </Provider>*/
  );
}

export default App;
