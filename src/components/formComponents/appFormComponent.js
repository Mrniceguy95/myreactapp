import React, { Component } from 'react';
import axios from 'axios';
import 'react-widgets/dist/css/react-widgets.css';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import PopUpComponent from '../popUpComponent/popUp'
require("moment/min/locales.min");

Moment.locale('es')
momentLocalizer()

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
            popUpMsg: ''
        };
        this.handlePopUp = this.handlePopUp.bind(this)
    }

    handleName = (event) => {
        this.setState({ name: event.target.value})
    }
    handleRide = (event) => {
        this.setState({ ride: event.target.value})
    }
    handleOrigin = (event) => {
        this.setState({ origin: event.target.value})
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
        const dateSend = date.charAt(0).toUpperCase() + date.slice(1);
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
            date: dateSend,
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
                displayPopUp: true,
                popUpMsg: 'Seleccione su rol en el viaje (Conductor o Pasajero)'
            })
            return
            
        }
        console.log(submitData)
        event.preventDefault();
        axios.post(urlpost, submitData)
            .then(res => {
                if (res.data === 'ok') {
                    this.setState({
                        displayPopUp: true,
                        popUpMsg: 'Su post ha sido enviado con exito'
                    })
                    console.log('right')
                } else {
                    this.setState({
                        displayPopUp: true,
                        popUpMsg: 'Por favor llene todos los datos y verifique que sean correctos'
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

    render() {
        
        
        return (
            <form className="contact-form" id="posts-form" noValidate="novalidate" onSubmit={this.handleSubmit}>
                <PopUpComponent handler={this.handlePopUp} display={this.state.displayPopUp} popUpMsg={this.state.popUpMsg}/>
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

                <select id ="origin-form" className="sb-input" size="1"
                    value={this.state.origin} onChange={this.handleOrigin}
                >

                    <option value="origen">Origen</option> 

                    <option value = "Ambato">Ambato</option>
                    <option value = "Archidona">Archidona</option>
                    <option value = "Atacames">Atacames</option>
                    <option value = "Babahoyo">Babahoyo</option>
                    <option value = "Baños">Baños</option>
                    <option value = "Coca">Coca</option>
                    <option value = "Cuenca">Cuenca</option>
                    <option value = "Durán">Durán</option>
                    <option value = "Esmeraldas">Esmeraldas</option>
                    <option value = "Guayaquil">Guayaquil</option>
                    <option value = "Ibarra">Ibarra</option>
                    <option value = "Lago Agrio">Lago Agrio</option>
                    <option value = "Latacunga">Latacunga</option>
                    <option value = "Loja">Loja</option>                            
                    <option value = "Macas">Macas</option>
                    <option value = "Machala">Machala</option>
                    <option value = "Manabí">Manabí</option>
                    <option value = "Manta">Manta</option>
                    <option value = "Nueva Loja">Nueva Loja</option>
                    <option value = "Otavalo">Otavalo</option>
                    <option value = "Portoviejo">Portoviejo</option>
                    <option value = "Puyo">Puyo</option>
                    <option value = "Quito">Quito</option>
                    <option value = "Riobamba">Riobamba</option>
                    <option value = "Santa Elena">Santa Elena</option>
                    <option value = "Santo Domingo">Santo Domingo</option>
                    <option value = "Shushufundi">Shushufundi</option>
                    <option value = "Tena">Tena</option>
                    <option value = "Zamora">Zamora</option>

                </select>

                <select className="sb-input" id ="destination-form" size="1"
                    value={this.state.destination} onChange={this.handleDestination}
                >

                    <option value="destino">Destino</option> 

                    <option value = "Ambato">Ambato</option>
                    <option value = "Archidona">Archidona</option>
                    <option value = "Atacames">Atacames</option>
                    <option value = "Babahoyo">Babahoyo</option>
                    <option value = "Baños">Baños</option>
                    <option value = "Coca">Coca</option>
                    <option value = "Cuenca">Cuenca</option>
                    <option value = "Durán">Durán</option>
                    <option value = "Esmeraldas">Esmeraldas</option>
                    <option value = "Guayaquil">Guayaquil</option>
                    <option value = "Ibarra">Ibarra</option>
                    <option value = "Lago Agrio">Lago Agrio</option>
                    <option value = "Latacunga">Latacunga</option>
                    <option value = "Loja">Loja</option>
                    <option value = "Macas">Macas</option>
                    <option value = "Machala">Machala</option>
                    <option value = "Manabí">Manabí</option>
                    <option value = "Manta">Manta</option>
                    <option value = "Nueva Loja">Nueva Loja</option>
                    <option value = "Otavalo">Otavalo</option>
                    <option value = "Portoviejo">Portoviejo</option>
                    <option value = "Puyo">Puyo</option>
                    <option value = "Quito">Quito</option>
                    <option value = "Riobamba">Riobamba</option>
                    <option value = "Santa Elena">Santa Elena</option>
                    <option value = "Santo Domingo">Santo Domingo</option>
                    <option value = "Shushufundi">Shushufundi</option>
                    <option value = "Tena">Tena</option>
                    <option value = "Zamora">Zamora</option>

                </select>                    
                </div>                
                <input className="sb-input" type="tel" placeholder="Whatsapp" id="whatsapp"
                    value={this.state.whatsapp} onChange={this.handleWhatsapp}
                />                    
                <input className="sb-input" id="fb" placeholder="Link de Facebook"
                    value={this.state.facebook} onChange={this.handleFacebook}
                />                
                <input className="sb-input"  placeholder="Asientos" id="seats"
                    value={this.state.seats} onChange={this.handleSeats}
                />                
                <div className="centerdate">                
                <input className="sb-input" id="password" type="text" placeholder="Clave"
                    value={this.state.password} onChange={this.handlePassword}
                />
                <DateTimePicker
                    value={this.state.date}
                    onChange={value => this.setState({ date: value })}
                    format='MMM D YYYY HH:mm'
                />                           
                </div>                   
                <textarea className="sb-input" placeholder="Mensaje..." id="description"
                    value={this.state.description} onChange={this.handleDescription}
                    >
                </textarea>
                <div className="btn1" style={{textAlign: 'center'}} >
                    <button value="Agregar Viaje" type="submit" id="submit1">Agregar Viaje</button>
                </div>
            </form>
        )
    }

}

export default AppForm;

