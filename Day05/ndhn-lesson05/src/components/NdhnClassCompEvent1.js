import React, { Component } from "react";

class NdhnClassCompEvent1 extends Component {
    //Hàm xử lí sự kiện
    ndhnEventHandleClick1 = () =>{
        alert("Button 1 Clicked");
    }

    ndhnEventHandleClick2 = (name) =>{
        alert("Button 2 Clicked; name="+name);
    }

    render() {
        return (
            <div className="alert aler-danger">
                <button className="btn btn-primary mx-1" onClick={this.ndhnEventHandleClick1}>Button1</button>
                <button className="btn btn-success mx-1"
                    onClick={()=>this.ndhnEventHandleClick2("Lam")}>Button2</button>
            </div>
        );
    }
}

export default NdhnClassCompEvent1;