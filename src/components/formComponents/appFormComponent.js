import React, { Component, useCallback, useState } from 'react';
import axios from 'axios';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import Combobox from 'react-widgets/lib/Combobox'
import PopUpComponent from '../popUpComponent/popUp'
require("moment/min/locales.min");

Moment.locale('es')
momentLocalizer()

let cities = ['Ambato', 'Archidona', 'Atacames', 'Babahoyo', 'Baños', 'Coca', 'Cuenca', 'Durán', 'Esmeraldas', 'Guayaquil', 'Ibarra', 'Lago Agrio', 'Latacunga', 'Loja', 'Macas', 'Machala', 'Manabí', 'Manta', 'Nueva Loja', 'Otavalo', 'Portoviejo', 'Puyo', 'Quijos', 'Quito', 'Riobamba', 'Santa Elana', 'Santo Domingo', 'Shushufindi', 'Tena', 'Zamora'];

class AppForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ride: '',
            origin: '',
            destination: '',
            whatsapp: '',
            facebook: '',
            seats: '',
            password: '',
            date: new Date(),
            description: '',
            displayPopUp: false,
            popUpMsg: '',
            shouldUpdate: false,
            openOrigin: false,
            openDestination: false
        }
        this.handlePopUp = this.handlePopUp.bind(this)
        this.handleOriginToggle = this.handleOriginToggle.bind(this)
        this.handleDestinationToggle = this.handleDestinationToggle.bind(this)
        this.resetForm = this.resetForm.bind(this)
    }

    handleName = (event) => {
        this.setState({ name: event.target.value})
    }
    handleRide = (event) => {
        this.setState({ ride: event.target.value})
    }
    handleDestination = (event) => {
        this.setState({ destination: event.target.value})
    }
    handleWhatsapp = (event) => {
        this.setState({ whatsapp: event.target.value})
    }
    handleFacebook = (event) => {
        this.setState({ facebook: event.target.value})
    }
    handleSeats = (event) => {
        this.setState({ seats: event.target.value})
    }
    handlePassword = (event) => {
        this.setState({ password: event.target.value})
    }
    handleDescription = (event) => {
        this.setState({ description: event.target.value})
    }
    handleSubmit = (event) => {
        const date = moment(this.state.date).format('MMM D YYYY HH:mm').split('.').join("");
        var dateString = date.charAt(0).toUpperCase() + date.slice(1);
        if ( dateString.length == 16 ) {
            dateString = dateString.slice(0,4) + "0" + dateString.slice(4);
        } else {}
        const rideType = this.state.ride;
        var urlpost = "";
        const submitData = {
            name : this.state.name,
            origin: this.state.origin,
            destination: this.state.destination,
            whatsapp: this.state.whatsapp,
            facebook: this.state.facebook,
            seats: this.state.seats,
            password: this.state.password,
            date: dateString,
            description: this.state.description
            
        }
        
        if ( rideType === "Conductor" ) {
            urlpost="https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/conductores"
        } else if ( rideType === "Pasajero" ) {
            urlpost="https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/pasajeros"
        } else {
            console.log(this.state.displayPopUp)
            event.preventDefault();
            this.setState({
                shouldUpdate: false,
                displayPopUp: true,
                popUpMsg: 'Seleccione su rol en el viaje (Conductor o Pasajero)',
            })
            return
            
        }
        event.preventDefault();
        axios.post(urlpost, submitData)
            .then(res => {
                if (res.data === 'ok') {
                    this.setState({
                        shouldUpdate: true,
                        displayPopUp: true,
                        popUpMsg: 'Su post ha sido enviado con exito',
                    })
                    console.log('right')
                } else {
                    this.setState({
                        shouldUpdate: false,
                        displayPopUp: true,
                        popUpMsg: 'Por favor llene todos los datos y verifique que sean correctos',
                    })
                    
                    console.log('wrong')
                }
            })   
    }

    handlePopUp() {
        console.log(this.state.displayPopUp)
        this.setState({
            displayPopUp: false
        })
        console.log(this.state.displayPopUp)
    }

    handleOriginToggle() {
        this.setState({openOrigin: !this.state.openOrigin})
    }

    handleDestinationToggle() {
        this.setState({openDestination: !this.state.openDestination})
    }

    resetForm() {
        this.setState({
            name: '',
            ride: '',
            origin: '',
            destination: '',
            whatsapp: '',
            facebook: '',
            password: '',
            seats: '',
            date: new Date(),
            description: ''
        })
    }

    render() {
        
        return (
            <form className="contact-form" id="posts-form" noValidate="novalidate" onSubmit={this.handleSubmit}>
                <PopUpComponent 
                update={this.resetForm} postreset={this.props.postreset} handler={this.handlePopUp} display={this.state.displayPopUp} popUpMsg={this.state.popUpMsg}
                shouldUpdate={this.state.shouldUpdate}
                />
                <input className="sb-input" placeholder="Nombre Completo" id="name" 
                    value={this.state.name} onChange={this.handleName}
                />

                <select id="ride-type" className="sb-input2" size="1"
                    value={this.state.ride} onChange={this.handleRide}
                >
                    <option value="tipo">Yo soy</option>
                    <option value="Conductor">Conductor</option>
                    <option value="Pasajero">Pasajero</option>
                </select>

                <div className="travelselect">

                <Combobox 
                    data={cities}
                    open={this.state.openOrigin}
                    onToggle={this.handleOriginToggle}
                    onClick= {this.handleOriginToggle}
                    value= {this.state.origin}
                    onChange={value => this.setState({origin: value})}
                    caseSensitive={false}
                    minLength={10}
                    placeholder='Origen'
                    filter='contains'
                    containerClassName='sb-input select-input'  
                    id='origin-form'
                    dropUp
                />

                <Combobox 
                    data={cities}
                    dropUp
                    open={this.state.openDestination}
                    onToggle={this.handleDestinationToggle}
                    onClick= {this.handleDestinationToggle}
                    value= {this.state.destination}
                    onChange={value => this.setState({destination: value})}
                    caseSensitive={false}
                    minLength={3}
                    placeholder='Destino'
                    filter='contains'
                    containerClassName='sb-input select-input'  
                    id='destination-form'
                />
                      
                </div>                
                <input className="sb-input" type="tel" placeholder="Whatsapp" id="whatsapp"
                    value={this.state.whatsapp} onChange={this.handleWhatsapp}
                />                    
                <input className="sb-input" id="fb" placeholder="Link de Facebook"
                    value={this.state.facebook} onChange={this.handleFacebook}
                />                
                                
                <div className="centerdate">                
                <input className="sb-input" id="password" type="text" placeholder="Clave"
                    value={this.state.password} onChange={this.handlePassword}
                />
                <input className="sb-input"  placeholder="Asientos" id="seats"
                    value={this.state.seats} onChange={this.handleSeats}
                />
                </div>  
                <DateTimePicker
                    className="datetime"
                    dropUp
                    value={this.state.date}
                    onChange={value => this.setState({ date: value })}
                    format='MMM D YYYY HH:mm'
                    min
                />                   
                <textarea className="sb-input" placeholder="Mensaje..." id="description"
                    value={this.state.description} onChange={this.handleDescription}
                    >
                </textarea>
                <div className="btn1" style={{textAlign: 'center'}} >
                    <button value="Agregar Viaje" type="submit" id="submit1">Agregar Viaje</button>
                    <a id="handleForm2">Ocultar</a>
                </div>
            </form>
        )
    }

}

export default AppForm;

