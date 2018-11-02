import React, { Component } from 'react';

class Page2 extends Component{
    constructor(props){
        super(props)
        this.state={
            today:this.props.today.toLocaleTimeString(),
            btn: 'start'
        }
        this.clearId = null;
        this.handleClick = this.handleClick.bind(this);
    }
    // handleClick = ()=> this.setState({today:(new Date()).toLocaleTimeString()})
    handleClick(evt){

       if(evt.target.textContent === "start"){
           //evt.target.textContent = "stop";
          this.setState({btn:'stop'});
          this.clearId = setInterval(()=>{
              this.setState({
                  today:(new Date()).toLocaleTimeString()
               })
            },1000)
       }else{
           this.setState({btn:'start'});
           console.log(this.clearId)
           clearInterval(this.clearId);
       }
    }
    render(){
        return(
        <React.Fragment>
            <h2>Page2</h2>
            <h3>{this.state.today}</h3>
            <button onClick={this.handleClick}>{this.state.btn}</button>
        </React.Fragment>
        );
    }
}

export default Page2;