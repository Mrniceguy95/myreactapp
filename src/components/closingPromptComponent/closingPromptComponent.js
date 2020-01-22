import React, { Component } from 'react';
import Popup from "reactjs-popup";
import InputPass from './inputPassComponent';
import axios from 'axios';
//components


class ClosingPrompt extends Component {
    constructor(props) {
        super(props);
        this.InputPass1 = React.createRef();
        this.state = {
            passok: 'initial',
            open: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.setInitialModal = this.setInitialModal.bind(this);
        
    }

    toggleModal() {
        // const currentState = this.state.open;
        
        this.setState({ open: !this.state.open });
        console.log(this.state.open)
    }

    setInitialModal() {
        const setInitial = 'initial';
        this.setState({ passok: setInitial })
        this.setState({ open: false })
    }


    deletePost() {
        
        const postData = {
            uri : this.props.uri,
            key : this.InputPass1.current.state.inputValue.toString()
        }
        if ( this.InputPass1.current.state.inputValue.toString() != '' ) {
        axios.post(`https://zealous-snyder-fe1913.netlify.com/.netlify/functions/index/deleteConductores`, postData)
            .then(res => {
                if (res.data === 'ok') {
                    const passok = 'ok'
                    this.setState({passok})
                } else {
                    const passok = 'wrong'
                    this.setState({passok})
                    console.log('wrong')
                }

            })
        } else {}
        
    }

    PopUpContent(passok) {
        
        if ( passok == 'initial' ) {
            return <div><span className="exit" onClick={this.toggleModal}><i className="fa fa-times" aria-hidden="true"></i></span>
                    <Popup open={this.state.open} onClose={this.setInitialModal} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={this.toggleModal}>
                                &times;
                                </a>
                                <div className="header"> acola.me </div>
                                <div><div className="content">
                                    Ingresa la clave de tu post para eliminarlo.
                                        <InputPass uri={ this.props.uri } ref={ this.InputPass1 } />
                                    </div>
                                    <div className="actions">
                                    
                                    <button
                                        className="button"
                                        onClick={ this.toggleModal }
                                    >
                                        cerrar
                                    </button>
                                    <button
                                        className="button"
                                        onClick={() => {
                                            this.deletePost();
                                        }}
                                    >
                                        Enviar
                                    </button>
                                    </div>
                                    </div>  
                            </div>
                            )}
                    </Popup></div>
        } else if ( passok == 'wrong' ) {
            return <div><span className="exit" onClick={this.toggleModal}><i className="fa fa-times" aria-hidden="true"></i></span>
                    <Popup open={this.state.open} onClose={this.setInitialModal} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={this.toggleModal}>
                                &times;
                                </a>
                                <div className="header"> acola.me </div>
                                <div>
                                <div className="content center-content">
                                    Clave incorrecta
                                    </div>
                                    <div className="actions">
                                    </div>
                                </div>
                            </div>
                            )}
                    </Popup> </div>
        } else if ( passok == 'ok' ) {
            return <div>
                    <span className="exit" onClick={this.toggleModal}><i className="fa fa-times" aria-hidden="true"></i></span>
                    <Popup open={this.state.open} onClose={() => {this.props.update(); this.setInitialModal();}} modal>
                        {close => (
                            <div className="modal">
                                <a className="close" onClick={this.toggleModal}>
                                &times;
                                </a>
                                <div className="header"> acola.me </div>
                                <div>
                                <div className="content center-content">
                                    Su post ha sido eliminado con éxito!
                                    </div>
                                    <div className="actions">
                                    
                                    </div>
                                </div>
                            </div>
                            )}
                    </Popup>
                    </div>
        }
    }


    render() {
        return (
            <div>
                
                { this.PopUpContent(this.state.passok) }
            </div>
        )
    }
}

export default ClosingPrompt;

