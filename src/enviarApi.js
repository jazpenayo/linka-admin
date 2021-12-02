import React, { Component } from 'react';


export default class EnviarApi extends Component {

  constructor(props) {
    super(props);

    this.state = {apikey: ''};
    this.enviar = this.enviar.bind(this);
    this.registrar = this.registrar.bind(this);


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  enviar() {
    this.setState(state => ({
      estado: !state.estado
    }));
    console.log("ENVIAR");
    console.log(this);
  }


  registrar(e) {
    console.log("REGISTRAR");
    console.log(this);
  }

  handleChange(event) {this.setState({apikey: event.target.value});  }
  handleSubmit(event) {
    alert('Contraseña: ' + this.state.apikey);
    console.log('Prueba de recuperar contraseña: ',this.state.apikey)
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

