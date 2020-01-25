import React, { Component } from 'react'

class InputPass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: '',
        isPasswordShow: false
      };
      this.handlePassword = this.handlePassword.bind(this);
    }

    handlePassword() {
      this.setState({
        isPasswordShow: !this.state.isPasswordShow
      })
    }

    render() {
      return (
        //...
        <div className="pass-container">
            <input id="post-password" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type={this.state.isPasswordShow ? "text" : "password"} placeholder="clave" />
            <i onClick={this.handlePassword} className={this.state.isPasswordShow ? "fa fa-eye password-icon show" : "fa fa-eye password-icon" }></i>
        </div>
        
        //...
      );
    }
  
    updateInputValue(evt) {
      this.setState({
        inputValue: evt.target.value
      });
    }
  }

  export default InputPass