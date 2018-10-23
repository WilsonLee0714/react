import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Departments from './Departments';
import Management from './Management';
import Organization from './Organization';

class About extends Component{
    constructor(props){
        super(props)
        // console.log(props.match.url)  // /about
    }
    render(){
        return(
         
         <React.Fragment>
         <h2 className="title">About Page</h2>
         <Link to={`${this.props.match.url}/organization`}>組織架構</Link> | 
         <Link to={`${this.props.match.url}/management`}>經營團隊</Link> | 
         <Link to={`${this.props.match.url}/departments`}>業務單位</Link> | 
         <hr />
          <switch> 
          {/* http://localhost:3000/about/organization */}
          <Route exact path={`${this.props.match.path}/organization`} component={Organization} />         
           {/* http://localhost:3000/about/management */}
          <Route path={`${this.props.match.path}/management`} component={Management} />     
          {/* http://localhost:3000/about/departments */}
          <Route path={`${this.props.match.path}/departments`} component={Departments} />     
         </switch> 
         </React.Fragment>
        
         );
    }
}

export default About;