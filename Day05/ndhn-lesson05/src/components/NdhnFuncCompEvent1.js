import React from "react";

export default function NdhnFuncCompEvent1() {
    //Hàm xử lí sự kiện
    const ndhnEventsButton1Click = () => {
        alert("Button 1 - Clicked"); 
    };

    const ndhnEventsButton2Click = () => {
        alert("Button 2 - Clicked");
    };
    const ndhnEventsButton3Click = (name) => {
        alert("Name:" + name)
    }
    return(
        <div className="alert aler-info">
            {/* <button className="btn btn-primary" onClick={ndhnEventsButton1Click()}>
                Button 1
            </button> */}
            <button className="btn btn-primary" onClick={ndhnEventsButton2Click}>
                Button 2
            </button>
            {/* <button className="btn btn-success" onClick={ndhnEventsButton3Click("Lam")}>
                Button 3
            </button> */}
            <button className="btn btn-success" onClick={()=>ndhnEventsButton3Click("Lam cuti")}>
                Button 4
            </button>
        </div>
    );
}