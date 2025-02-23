import React, { Component } from "react";

class NdhnClassComp extends Component {
    constructor(props){
        super(props);
        //khởi tạo state
        this.state = {
            fullname:"Nguỹn Lam",
            age:20,
            phone:"0363917906"
        }
    }
    //Hàm xử lý sự kiện
    changeInfo = (ev)=>{
        //cập nhật state
        this.setState({
            fullname:'Nguyễn Đỗ Hiền Nam'
        });
    }
    render() {
        let users = this.props.renderUsers;
        return (
            <div className="alert alert-success">
                <h2>Trình bày dữ liệu từ state</h2>
                <p>info state (fullname): {this.state.fullname}</p>
                <p>info state (age): {this.state.age}</p>
                <p>info state (phone): {this.state.phone}</p>

                <hr/>
                <button className="btn btn-primary" onClick={this.changeInfo}>Change Info</button>
                <hr/>
                <h3>Lấy dữ liệu từ Props</h3>
                <p>Name: {this.props.renderName}</p>
                <p>fullname: { this.props.renderUsers ?this.props.renderUsers.fullname:''}</p>
                <p>age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
                <p>phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
            </div>
        );
    }
}

export default NdhnClassComp