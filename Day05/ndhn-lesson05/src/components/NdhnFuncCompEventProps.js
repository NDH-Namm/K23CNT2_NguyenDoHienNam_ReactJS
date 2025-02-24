import React from "react";

export default function NdhnFuncCompEventProps(ndhnProps) {
    //Hàm xử lí sự kiện
    const ndhnHandleButtonClick1 = ()=>{
        alert("Dữ liệu từ props:" + ndhnProps.ndhnRenderName);
        console.log("Xin chào:",ndhnProps.ndhnRenderName);
    }

    const ndhnHandleButtonClick2 = (param)=>{
        //Lấy dữ liệu từ props
        alert("Dữ liệu từ props (Button 2 click):" + ndhnProps.ndhnRenderName);
        //Dữ liệu từ tham số
        console.log("=========================");
        console.log("Hi:",param);
        console.log("=========================");
    }
    return(
        <div className="alert aler-info">
            <button className="btn btn-primary mx-1"
                onClick={ndhnHandleButtonClick1}>Button1</button>

            <button className="btn btn-success mx-1"
                onClick={()=>ndhnHandleButtonClick2("Button 2")}>Button2</button>    
        </div>
    )
}