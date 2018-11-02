import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Page1 extends Component{
    // constructor(props){
    //     super(props)        
    // }
    handleClick = (evt)=>{
        let item = evt.target.textContent;
        this.props.handleParentClick(item)
    }
    render(){
       // const {name, skills, age} = this.props;
        return(
        <React.Fragment>
            <h2>Page1</h2>
            <p>{this.props.name} {this.props.age} 歲，有 {this.props.skills.length} 項技能 </p>
            <ul>
                {
                    this.props.skills.map((skill,idx)=><li key={idx} onClick={this.handleClick}>{skill}</li>)
                }
            </ul>
            
        </React.Fragment>
        );
    }
}
Page1.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    skills: PropTypes.array
}
Page1.defaultProps = {
    name:"guest",
    age:28
}
export default Page1;