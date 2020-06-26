import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { isDev, callPartApi } from '../lib/helpers';
import Table from "./Table/Table";

class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: [],
            errorMessage: "",
            pagy: [],
            loaded: false
        };
    }

    componentDidMount() {
        document.title = "Izzicup - Parts"
        // TODO: Replace this URL with production URL
        callPartApi()
            .then(response => {
                if (isDev()) { console.log("PartList API call response: ", response) }
                this.setState({ parts: response.data.parts.data });
                this.setState({ pagy: response.data.pagy });
                this.setState( { loaded: true });
            })
            .catch(error => {
                if (isDev()) { console.log('PartList Api Error fetching parts', error) }
                this.setState( { errorMessage: error })
            });
    }

    render() {
        return(
            <div className="table">
                { this.state.loaded ? <Table parts={this.state.parts} pagy={this.state.pagy}/> : null }
            </div>
            // <h2><Link to={`localhost:3000/v1/parts/${part.id}`}>{part.title}</Link></h2>
        )
    }
}

export default PartList;