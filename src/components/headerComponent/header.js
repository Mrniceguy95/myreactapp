import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navActive: false,
            home: true,
            share: false,
            roads: false,
            ant: false,
            about: false,
            contact: false
        }
        this.handleNav = this.handleNav.bind(this)
    }

    componentDidMount() {
        if ( window.location.pathname.substring(1) == "compartir" ) {
            this.turnActiveOn('compartir');
        } else if ( window.location.pathname.substring(1) == "vias" ) {
            this.turnActiveOn('roads');
        } else if ( window.location.pathname.substring(1) == "ant" ) {
            this.turnActiveOn('ant');
        } else if ( window.location.pathname.substring(1) == "acercade" ) {
            this.turnActiveOn('acercade');
        } else if ( window.location.pathname.substring(1) == "contacto" ) {
            this.turnActiveOn('contacto');
        }
    }

    handleNav() {
        this.setState({
            navActive: !this.state.navActive
        })
    }

    turnActiveOn(state) {
        this.setState({
            home: false,
            share: false,
            roads: false,
            ant: false,
            about: false,
            contact: false
        });
        if ( state == 'home') {
            this.setState({
                home: true
            }); 
        } else if ( state == 'compartir' ) {
            this.setState({
                share: true
            }); 
        } else if ( state == 'vias' ) {
            this.setState({
                roads: true
            }); 
        } else if ( state == 'ant' ) {
            this.setState({
                ant: true
            }); 
        } else if ( state == 'acercade' ) {
            this.setState({
                about: true
            }); 
        } else if ( state == 'contacto' ) {
            this.setState({
                contact: true
            }); 
        }
    }

    render() {
        return (
            <div className="main-header">
                <div className="center-header">
                    <a href="/index.html">
                        <img src={`${imgPath}logo.svg`} alt="logo"/>
                        <h1>acola.me</h1>
                    </a>
                    <div id="nav-icon3" className={this.state.navActive ? 'open' : '' } onClick={this.handleNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <nav className="main-nav">
                        <ul className={this.state.navActive ? 'active' : '' }>
                            <li>
                                <Link onClick={() => { this.turnActiveOn('home'); this.handleNav(); }} className={this.state.home ? "current-menu-item" : "" } to='/'>Inicio</Link>
                            </li>
                            <li>
                                <Link onClick={() => { this.turnActiveOn('compartir'); this.handleNav(); }} className={this.state.share ? "current-menu-item" : "" } to='/compartir'>Compartir Viajes</Link>
                            </li>
                            <li className={this.state.roads || this.state.ant  ? "current-menu-item sub-menu" : "sub-menu" }><a href="javascript:void(0);">Consultas</a>
                                <ul className="sub-menu-items">
                                    <li>
                                        <Link onClick={() => { this.turnActiveOn('vias'); this.handleNav(); }} className={this.state.roads ? "current-menu-item" : "" } to='/vias'>Estado de vías</Link>
                                    </li>
                                    <li>
                                        <Link onClick={() => { this.turnActiveOn('ant'); this.handleNav(); }} className={this.state.ant ? "current-menu-item" : "" } to='/ant'>Obligaciones ANT</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link onClick={() => { this.turnActiveOn('acercade'); this.handleNav(); }} className={this.state.about ? "current-menu-item" : "" } to='/acercade'>Acerca De</Link>
                            </li>
                            <li>
                                <Link onClick={() => { this.turnActiveOn('contacto'); this.handleNav(); }} className={this.state.contact ? "current-menu-item" : "" } to='/contacto'>Contacto</Link>
                            </li>
                        </ul>
                    </nav>
                </div>  
            </div>
        )
    }
}

export default Header;
