import React,{ Component } from "react";

class NdhnClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnFullname:"Nguyễn Đỗ Hiền Nam",
            ndhnAge:20,
        }
    }

    //Hàm xử lí sự kiện
    ndhnEventHandleClick1 = ()=>{
        //Lấy dữ liệu trong state
        alert("Fullname:" +this.state.ndhnFullname + "\n Age:" + this.state.ndhnAge);
    }
    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.ndhnEventHandleClick1}>Button 1 - Dữ liệu trong state </button>
            </div>
        );
    }
}

export default NdhnClassCompEventState;