import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { isDev, callPartApi } from '../lib/helpers';
import MakeTable from "./Table";

class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parts: [],
            errorMessage: ""
        };
    }

    componentDidMount() {
        document.title = "Izzicup - Parts"
        let token = `Bearer ${localStorage.getItem("token")}`;
        // TODO: Replace this URL with production URL
        callPartApi()
            .then(response => {
                if (isDev()) { console.log(response) }
                this.setState({ parts: response.data.parts.data })
            })
            .catch(error => {
                if (isDev()) { console.log('Error fetching parts', error) }
                this.setState( { errorMessage: error })
            });
    }

    render() {
        return(
            <div className="table">
                <MakeTable parts={this.state.parts}/>
            </div>
            // <h2><Link to={`localhost:3000/v1/parts/${part.id}`}>{part.title}</Link></h2>
        )
    }
}

export default PartList;