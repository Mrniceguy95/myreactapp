import React, { Component } from 'react';
import Posts from '../postsComponent/posts';
import AppForm from '../formComponents/appFormComponent'
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

    render () {
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
                                        onClick={this.props.update}
                                    ></i>
                            </form>
                            <p className="p2"><strong>Busca</strong> tu viaje compartido.</p>
                            <div className="separator2"></div>
                            
                            <p className="p1"><strong>Añade</strong> el viaje que quieres compartir</p>
                            <div className="form">
                                <AppForm key={this.state.key} update={this.props.update}/>
                            </div>
                            <p className="p2"><strong>Añade</strong> el viaje que quieres compartir</p>

                    </div>
                    
                    <div className="app-posts">
                        <p className="p-lf">Estoy en busca de:</p>
                        <button className="tab tb-drivers active" id="btnconductores">Conductores</button>
                        <button className="tab tb-passengers" id="btnpasajeros">Pasajeros</button>
                        <button id="sortbtn" className="tab tb-sortdate"><i className="fa fa-calendar" aria-hidden="true"></i><i className="fa fa-sort-desc" aria-hidden="true"></i></button>
                        <div className="sbar-wrapper" data-simplebar data-simplebar-auto-hide="false">
                            
                            <Posts drivers={this.state.drivers} lifters={this.state.lifters} />

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default SharingApp;

