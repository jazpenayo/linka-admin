import React, { Component } from 'react';
import EnviarApi from './enviarApi';


export default class SourceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sources: []
        }
    }

    state = {
        sources: []
    };
    apiKey = {this.props.apiKey}

    componentDidMount() {
        let url = "http://localhost:5000/api/v1/sources"
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-Key': {props.apiKey},
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => this.setState({ sources: res }));


    }

    render() {
        return (
            <div>
                <h1>Sources list</h1>
                <ul>
                    {this.state.sources.map(function (item, index) {
                        return <li key={index}>{item.source}</li>
                    }

                    )}
                </ul>
            </div>

        );
    }



}

