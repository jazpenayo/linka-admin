import React, { Component } from 'react';


export default class EnviarApi extends Component {

  constructor(props) {
    super(props);

    this.state = {apikey:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {this.setState({apikey: event.target.value});  }
  handleSubmit(event) {
    this.props.onApiKeyChange(this.state.apikey);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>LINKA</h2>
        <br />
        APYKey:
        <input id="api" nombre="api"  value={this.state.value} onChange={this.handleChange} />  <br />
        <button onClick={this.handleSubmit}>Enviar</button>
        <br /> <br />
      </div>
    );
  }
}