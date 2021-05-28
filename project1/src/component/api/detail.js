import axios from 'axios';
import React, { Component } from 'react';

class user extends Component {

    componentDidMount(){
        axios.get(`http://api.oceantech.vn/intern/oauth/config`)
        .then(res => {
            console.log(res);
            console.log(res.data.createdBy);
        })
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}

export default user;