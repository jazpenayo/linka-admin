import React, { Component } from 'react';


export default class SourceList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sources: []
        }
    }

    componentDidMount() {
        if (this.props.apikey===""){
            this.setState({sources: []});
            return;
        }
        let url = `${process.env.REACT_APP_LINKA_URL}/api/v1/sources`;
        fetch(url, {
            method: 'GET',
            headers: {
                'X-API-Key': this.props.apikey,
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
