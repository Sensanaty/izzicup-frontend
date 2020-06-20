import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PartList extends Component {
    constructor(props) {
        super(props);
        this.state = { parts: [] };
    }

    componentDidMount() {
        let token = `Bearer ${localStorage.getItem("token")}`;
        axios({method: 'get', url: 'http://localhost:3000/v1/parts', headers: {'Authorization': token}})
            .then(response => {
                console.log(response);
                this.setState({ parts: response.data.parts.data })
            })
            .catch(error => console.log('Error fetching parts', error));
    }

    render() {
        return(
            <div>
                {this.state.parts.map((part) => {
                    return(
                        <div key={part.id}>
                            <h2><Link to={`localhost:3000/v1/parts/${part.id}`}>{part.title}</Link></h2>
                            <p>Part Number: {part.attributes["part_number"]}</p>
                            <p>Description: {part.attributes["description"]}</p>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PartList;