import React, { Component } from 'react';

class Contact extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <React.Fragment>
            <h2>Contact Page</h2>
            <button className="btn btn-primary">Login</button>
        </React.Fragment>
        );
    }
}

export default Contact;