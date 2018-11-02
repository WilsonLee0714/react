import React, { Component } from 'react';

class Show extends Component{
    // constructor(props){
    //     super(props)
    //     // console.log(this.props.members[0])
    // }
    handler = (evt) => {
      this.props.modify(evt.target.dataset.id,evt.target.dataset.type);
    }
    render(){
        return(
            <React.Fragment>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>編號</th>
                            <th>姓名</th>
                            <th>電子郵件</th>
                            <th>年紀</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      {this.props.members.map(member => 
                        <tr key={member.id}>
                          <td>{member.id}</td>
                          <td>{member.name}</td>
                          <td>{member.email}</td>
                          <td>{member.age}</td>
                          <td>
                            <button className="btn btn-info mr-3" data-id={member.id} data-type="edit" onClick={this.handler}>edit</button>
                            <button className="btn btn-danger" data-id={member.id} data-type="del" onClick={this.handler}>Del</button>
                          </td>
                        </tr>
                      )}
                    </tbody>
                </table>
            </React.Fragment>
        )
    }

}

export default Show;