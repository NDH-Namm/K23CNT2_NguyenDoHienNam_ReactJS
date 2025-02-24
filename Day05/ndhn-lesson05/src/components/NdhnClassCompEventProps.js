import React,{ Component } from "react";

class NdhnClassCompEventProps extends Component {
    //Hàm xử lí sự kiện 
    ndhnEventHandleClick1 = ()=>{
        alert("Hello..." + this.props.ndhnRenderTitle);
    }
    render() {
        return (
            <div className="alert alert-danger">
                <button className="btn btn-primary" onClick={this.ndhnEventHandleClick1}>Button 1</button>
            </div>
        );
    }
}

export default NdhnClassCompEventProps;