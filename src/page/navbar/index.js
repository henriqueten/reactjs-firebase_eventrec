import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';


function Navbar() {

  const dispatch = useDispatch();

    return(
<nav class="navbar navbar-expand-lg" >
        <i class="far fa-calendar-plus text-white fa-2x"></i>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><Link className="nav-link ml-2" to="#">Home </Link></li>

      {
      useSelector( state => state.usuarioLogado) > 0 ?
      <>
      <li className="nav-item"><Link className="nav-link" to="/eventocadastro">Publicar Evento </Link></li>
      <li className="nav-item"><Link className="nav-link" to="">Meus Eventos </Link></li>
      <li className="nav-item"><Link className="nav-link" onClick={() => dispatch( {type: 'LOG_OUT'} )}>Sair </Link></li>
      </>
      :
      <>
      <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastrar </Link></li>
      <li className="nav-item"><Link className="nav-link" to="/login">Login </Link></li>
      </>

      
      }

    </ul>
  </div>
</nav>






    )
}

export default Navbar;