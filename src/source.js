import React, { Component } from 'react';
import SourceList from './sourceList';
import SendApi from './sendApi';
import CreateApi from './createApi';


export default class Source extends Component {

  constructor(props) {
    super(props);

    this.state = { apikey: "" };
    this.handleApiKeyChange = this.handleApiKeyChange.bind(this);

  }

  handleApiKeyChange(apikey) {
    this.setState({apikey});
  } 

  render() {
    const apikey = this.state.apikey;
    return (
      <div>
       <SendApi onApiKeyChange={this.handleApiKeyChange}/>
        <br /> <br />
        <SourceList key={this.state.apikey} apikey={apikey} />
        <br /> <br />
        <CreateApi/>
      </div>

    );
  }

}

