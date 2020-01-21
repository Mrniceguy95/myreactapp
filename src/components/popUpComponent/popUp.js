import React, { Component } from 'react';
import Popup from "reactjs-popup";

class PopUpComponent extends Component {
    constructor(prop) {
        super(prop)
    }

    render() {
        return (
            <div>
                <Popup 
                    open={this.props.display} onClose={this.props.handler} 
                modal>
                    {close => (
                        <div className="modal">
                            <a className="close" 
                                onClick={this.props.handler}
                            >
                            &times;
                            </a>
                            <div className="header"> acola.me </div>
                            <div className="content center-content">
                            {this.props.popUpMsg}
                            </div>
                        </div>
                        )}
                </Popup>
            </div>
        )
    }
}

export default PopUpComponent