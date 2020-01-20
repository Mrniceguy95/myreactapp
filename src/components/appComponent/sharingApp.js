import React, { Component } from 'react';
import ClosingPrompt from '../closingPromptComponent/closingPromptComponent';
import axios from 'axios';
import List from 'list.js';
import $ from 'jquery';


//components

class SharingApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            drivers: [],
            lifters: []
        }
    }
    
    componentDidMount() {

        axios.get(`https://acolame-d1d98.firebaseio.com/conductores.json`)
            .then(res => {
                const drivers = res.data;
                this.setState({ drivers});
            })

        axios.get(`https://acolame-d1d98.firebaseio.com/pasajeros.json`)
        .then(res => {
            const lifters = res.data;  
            this.setState({ lifters });
        })
    }

    componentDidUpdate() {
        var max=0;
        var className = document.querySelectorAll('.date-month');
        function monthDate(param) {
            let dateValue  = Date.parse(param)/1000;
            return -(dateValue-max);
        }

        for(let i = 0; i < className.length; i++) {
            var attributeaux = document.querySelectorAll('.date-month')[i].innerText;
            attributeaux = attributeaux.substring(3, 5)+"-"+attributeaux.substring(0, 2)+"-"+attributeaux.substring(6, 10);
            let dateValueaux  = Date.parse(attributeaux)/1000;
            if(dateValueaux>max) max=dateValueaux;
        }

        for(let i = 0; i < className.length; i++) {
            var attribute = document.querySelectorAll('.date-month')[i].innerText;
            attribute = attribute.substring(3, 5)+"-"+attribute.substring(0, 2)+"-"+attribute.substring(6, 10);
            document.querySelectorAll('.date-month')[i].setAttribute('data-timestamp', monthDate(attribute));
        }

        var options = {
            valueNames: [ 'origin', 'destination', 'pname' ]
        };
        
        var options2 = {
            valueNames: [ { name: 'date-month', attr: 'data-timestamp' } ]
        };

        var posts = new List('users', options);
        var posts2 = new List('users', options2);
        var posts3 = new List('users2', options);
        var posts4 = new List('users2', options2);

        $(".filter").keyup(function(){
            posts.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
            });
            });
            posts3.filter(item => {
            return options.valueNames.every(name => {
                var value = $("#"+name).val().toLowerCase();
                return item.values()[name].toLowerCase().includes(value)
            });
            });
            
            
        });
    }

    getDepartureDate(date) {
        var month="";
        if(date.includes("Ene")){
            month="01"
        }
        else if(date.includes("Feb")){
            month="02"
        }
        else if(date.includes("Mar")){
            month="03"                        
        }
        else if(date.includes("Abr")){
            month="04"
        }
        else if(date.includes("May")){
            month="05"
        }
        else if(date.includes("Jun")){
            month="06"
        }
        else if(date.includes("Jul")){
            month="07"
        }
        else if(date.includes("Ago")){
            month="08"
        }
        else if(date.includes("Sep")){
            month="09"
        }
        else if(date.includes("Oct")){
            month="10"
        }
        else if(date.includes("Nov")){
            month="11"
        }
        else if(date.includes("Dic")){
            month="12"
        }
        var fechadesalida=date.substring(4, 6)+"-"+month+"-"+date.substring(9, 11);
        return fechadesalida;
    }

    getDepartureTime(date) {
        
        var horadesalida=date.substring(12, 17)
        return horadesalida;
    }

    render () {
        var drivers = this.state.drivers;
        var lifters = this.state.lifters;
        return (
            <section className="app-section" id="app">
                <div className="app-container">
                    <div className="app-search">
                            <p className="p1"><strong>Busca</strong> tu viaje compartido.</p>
                            <form id="to-from" autoComplete="off">
                                    <input id="origin" className="filter" type="text" placeholder="Origen" />
                                    <input id="destination"  className="filter" type="text" placeholder="Destino" />
                                    <input id="pname"  className="filter" type="text" placeholder="Nombre" />
                                    
                                    <i className="fa fa-refresh" aria-hidden="true" 
                                    // onClick={Refresh}
                                    ></i>
                            </form>
                            <p className="p2"><strong>Busca</strong> tu viaje compartido.</p>
                            <div className="separator2"></div>
                            
                            <p className="p1"><strong>Añade</strong> el viaje que quieres compartir</p>
                            <div className="form">
                            
                                <form className="contact-form" noValidate="noalidate" id="posts-form">
                
                                    <input className="sb-input" placeholder="Nombre Completo" id="name" />

                                    <select id="ride-type" className="sb-input2" size="1">
                                        <option value="tipo">Yo soy</option>
                                        <option value="Conductor">Conductor</option>
                                        <option value="Pasajero">Pasajero</option>
                                    </select>
                    
                                    <div className="travelselect">
                    
                                    <select id ="origin-form" className="sb-input" size="1">
                        
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
                    
                                    <select className="sb-input" id ="destination-form" size="1">
                        
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
                                    <input className="sb-input" type="tel" placeholder="Whatsapp" id="whatsapp"/>                    
                                    <input className="sb-input" id="fb" placeholder="Link de Facebook"/>                
                                    <input className="sb-input"  placeholder="Asientos" id="seats"/>                
                                    <div className="centerdate">                
                                    <input className="sb-input" id="password" type="text" placeholder="Clave"/>
                                    <a className="c-btn c-datepicker-btn">
                                            
                                        <span className="material-icon">Fecha y Hora <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </span>    
                                    </a>       
                                    <pre id="output"></pre>                              
                                    </div>                   
                                    <textarea className="sb-input" placeholder="Mensaje..." id="description"></textarea>
                                    <div className="btn1" style={{textAlign: 'center'}} >
                                        <input value="Agregar Viaje" type="button" id="submit1"
                                        //  onClick={sendForm} 
                                        />
                                    </div>
                                </form>
                            
                            </div>
                            <p className="p2"><strong>Añade</strong> el viaje que quieres compartir</p>

                    </div>
                    
                    <div className="app-posts">
                        <p className="p-lf">Estoy en busca de:</p>
                        <button className="tab tb-drivers active" id="btnconductores">Conductores</button>
                        <button className="tab tb-passengers" id="btnpasajeros">Pasajeros</button>
                        <button id="sortbtn" className="tab tb-sortdate"><i className="fa fa-calendar" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></button>
                        <div className="sbar-wrapper" data-simplebar data-simplebar-auto-hide="false">
                            <div  id="users">
                                <span id="sort1" className="sort" role="button" data-sort="date-month">Ordenar por fecha de salida</span>
                                <ul className="list list-drivers" id="posts-content">
                                    
                                       
                                {
                                Object.keys(drivers).map((driver, i) => (

                                    <li key={i}>                            
                                        <ClosingPrompt uri={Object.keys(drivers)[0].toString()} />
                                        <div className="title-list"><h3 className="pname">{drivers[driver].name}</h3><h2>{drivers[driver].published}</h2></div>
                                        <p>Origen: <span className="origin">{drivers[driver].origin}</span></p>
                                        <p>Destino: <span className="destination">{drivers[driver].destination}</span></p>
                                        <p>Fecha de salida: <span className="date-month timestamp">{ this.getDepartureDate(drivers[driver].date) }</span></p>
                                        <p>Hora de salida: <span>{ this.getDepartureTime(drivers[driver].date) }</span></p> 
                                        <p>Asientos: <span>{drivers[driver].seats}</span></p>  
                                        <p>Redes sociales: 

                                            <a href={drivers[driver].whatsapp} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>

                                            <a href={drivers[driver].facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            
                                            </p>
                                        <p className="comment">{drivers[driver].description}</p>                        
                                    </li>
                                ))
                                }
                                     

                                </ul>
                            </div>
                            <div id="users2" className="inactive">
                                <span id="sort2" className="sort" role="button" data-sort="date-month">Ordenar por fecha de salida</span>
                                <ul className="list list-passengers" id="users-content">
                                    {
                                    Object.keys(lifters).map((lifter, i) => (

                                        <li key={i}>                            
                                            <span className="exit"><i className="fa fa-times" aria-hidden="true"></i></span>
                                            <div className="title-list"><h3 className="pname">{lifters[lifter].name}</h3><h2>{lifters[lifter].published}</h2></div>
                                            <p>Origen: <span className="origin">{lifters[lifter].origin}</span></p>
                                            <p>Destino: <span className="destination">{lifters[lifter].destination}</span></p>
                                            <p>Fecha de salida: <span className="date-month timestamp">{ this.getDepartureDate(lifters[lifter].date) }</span></p>
                                            <p>Hora de salida: <span>{ this.getDepartureTime(lifters[lifter].date) }</span></p> 
                                            <p>Asientos: <span>{lifters[lifter].seats}</span></p>  
                                            <p>Redes sociales: 

                                                <a href={lifters[lifter].whatsapp} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>

                                                <a href={lifters[lifter].facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                                
                                                </p>
                                            <p className="comment">{lifters[lifter].description}</p>                        
                                        </li>
                                    ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default SharingApp;

