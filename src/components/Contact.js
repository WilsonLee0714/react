import React, { Component } from 'react';
import Page1 from './Page1';
import Page2 from './Page2';

class Contact extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(item){
       alert(item);
    }
    render(){
        const skills = ["html","css","javascript","jquery"];
        return(
        <React.Fragment>
            <h2>Contact Page</h2>            
            {/* <Page1 age={30} skills={skills} /> */}
            {/* <Page1 name="Eric" age={30} skills={skills} /> */}
            <Page1 name="Eric" skills={skills} handleParentClick={this.handleClick} />
            <Page2 today={new Date()}  />
        </React.Fragment>
        );
    }
}

export default Contact;