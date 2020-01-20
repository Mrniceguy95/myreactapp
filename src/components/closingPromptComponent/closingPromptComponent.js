import React, { Component } from 'react';
import Popup from "reactjs-popup";
import InputPass from './inputPassComponent';
import axios from 'axios';
//components


class ClosingPrompt extends Component {
    constructor(props) {
        super(props);
        this.InputPass1 = React.createRef();
    }


    deletePost() {

        const postData = {
            uri : this.props.uri,
            key : '1234'
        }

        console.log(postData)
        axios.post(`https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/deleteConductores`, {postData})
            .then(res => {
                if (res.data === 'ok') {
                    console.log('yes')
                } else {
                    console.log('no')
                }
            })

    }

    render() {

        
        
        return (
            <Popup trigger={<span className="exit"><i className="fa fa-times" aria-hidden="true"></i></span>} modal>
                {close => (
                    <div className="modal">
                        <a className="close" onClick={close}>
                        &times;
                        </a>
                        <div className="header"> acola.me </div>
                        <div className="content">
                        Ingresa la clave de tu post para eliminarlo.
                            <InputPass uri={ this.props.uri } ref={ this.InputPass1 } />
                        </div>
                        <div className="actions">
                        
                        <button
                            className="button"
                            onClick={() => {
                            close();
                            }}
                        >
                            cerrar
                        </button>
                        <button
                            className="button"
                            onClick={() => {
                                this.deletePost(this.InputPass1.current.state.inputValue) ;
                            }}
                        >
                            Enviar
                        </button>
                        </div>
                    </div>
                    )}
            </Popup>
        )
    }
}

export default ClosingPrompt;

