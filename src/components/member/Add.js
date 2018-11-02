import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            age: "",
            id: ""
        };

    }
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    }
    update = (evt) => {
        this.props.update(this.state);
        evt.preventDefault();
    }
    add = (evt) => {
        this.props.add(this.state);
        evt.preventDefault();
    }
    static getDerivedStateFromProps(props, state) {
        if (props.modifyData.id !== state.id) {
            return {
                name: props.modifyData.name,
                email: props.modifyData.email,
                age: props.modifyData.age,
                id: props.modifyData.id
            }
        }
        return null;
    }
    render() {

        return (
            <React.Fragment>
                <form>
                    {/* <div className="form-group">
                        <label htmlFor="id">編號</label>
                        <span>{this.state.id}</span> 
                    </div> */}
                    {/* <input type="hidden" value={this.state.id} id="id" /> */}
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} className="form-control" id="name" placeholder="Enter Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">電子郵件</label>
                        <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">年紀</label>
                        <input type="number" value={this.state.age} onChange={this.handleChange} className="form-control" id="age" placeholder="Enter Age" />
                    </div>
                    {this.props.modifyType === "add" ? <button type="button" onClick={this.add} className="btn btn-primary">
                        新增
            </button>
                        : <button type="button" onClick={this.update} className="btn btn-secondary">
                            修改
            </button>}
                </form>
            </React.Fragment>
        )
    }

}

export default Add;