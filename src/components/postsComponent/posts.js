import React, { Component } from 'react';
import ClosingPrompt from '../closingPromptComponent/closingPromptComponent';
//components


class Posts extends Component {
  constructor(prop) {
    super(prop)
    this.handlePosts = this.handlePosts.bind(this)
    
  }

  handlePosts = (event) => {
      console.log('didnt work')
      this.forceUpdate();
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

  nullCheck(object) {
    if ( object != null ) {

        return Object.keys(object).map((user, i) => (

            <li key={i}>                            
                <ClosingPrompt uri={Object.keys(object)[i].toString()} update={this.props.reset}/>
                <div className="title-list"><h3 className="pname">{object[user].name}</h3><h2>{object[user].published}</h2></div>
                <p>Origen: <span className="origin">{object[user].origin}</span></p>
                <p>Destino: <span className="destination">{object[user].destination}</span></p>
                <p>Fecha de salida: <span className="date-month timestamp">{ this.getDepartureDate(object[user].date) }</span></p>
                <p>Hora de salida: <span>{ this.getDepartureTime(object[user].date) }</span></p> 
                <p>Asientos: <span>{object[user].seats}</span></p>  
                <p>Redes sociales: 

                    <a href={object[user].whatsapp} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>

                    <a href={object[user].facebook} target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    
                    </p>
                <p className="comment">{object[user].description}</p>                        
            </li>
            ))

    } else {}
}

  render() {
    return (
      <div>
        <div  id="users" className={this.props.postactive ? "" : "inactive"}>
            <span id="sort3" className="sort" role="button" data-sort="date-month">Ordenar por fecha de salida</span>
            <ul className="list list-drivers" id="posts-content">
                {
                this.nullCheck(this.props.drivers)
                }  
            </ul>
        </div>
        <div id="users2" className={this.props.postactive ? "inactive" : ""}>
            <span id="sort2" className="sort" role="button" data-sort="date-month">Ordenar por fecha de salida</span>
            <ul className="list list-passengers" id="users-content">
                {
                this.nullCheck(this.props.lifters)
                }
            </ul>
        </div>
      </div>
    )
  }  
}

export default Posts;

