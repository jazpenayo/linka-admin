import React, { Component } from 'react';
import SourceList from './sourceList';
import EnviarApi from './enviarApi';


export default class Source extends Component {

  constructor(props) {
    super(props);

    this.state = { estado: true };


  }



  render() {
    return (
      <div>
       <EnviarApi />
        <br /> <br />
        {this.state.estado ? <SourceList /> : null}
      </div>

    );
  }

}

