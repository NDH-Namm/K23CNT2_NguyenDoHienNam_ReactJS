import React from "react";

export default function NdhnFuncComp(props) {
    return(
        <div>
            <h2>Demo: Function Components Props</h2>
            <p>Lấy dữ liệu từ Props để hiển thị</p>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>Company: {props.company}</p>
            <p>Note: {props.name}</p>
        </div>
    )
}