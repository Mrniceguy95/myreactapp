import React from 'react';
import {Link} from 'react-router-dom';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

function Header() {
  return (
    <div className="main-header">
        <div className="center-header">
            <a href="/index.html">
                <img src={`${imgPath}logo.svg`} alt="logo"/>
                <h1>acola.me</h1>
            </a>
            <div id="nav-icon3">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to='/'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/compartir'>Compartir Viajes</Link>
                    </li>
                    <li><a href="/vias.html">Estado de las vías</a></li>
                    <li><a href="/ant.html">Consultas ANT</a></li>
                    <li><a href="/acercade.html">Acerca De</a></li>
                    <li><a href="/contact.html">Contacto</a></li>
                </ul>
            </nav>
        </div>  
    </div>
  );
}

export default Header;
