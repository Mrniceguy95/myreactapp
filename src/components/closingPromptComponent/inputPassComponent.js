import React, { Component } from 'react'

class InputPass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      };
    }

    render() {
      return (
        //...
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} type="text" placeholder="clave" />
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