import React from "react";

export default function NdhnFuncComp(props) {
    return(
        <div>
            <h2>Demo: Function Components Props</h2>
            <p>Lấy dữ liệu từ Props để hiển thị</p>
            <p>Name: {Props.name}</p>
            <p>Address: {Props.address}</p>
            <p>Company: {Props.company}</p>
            <p>Note: {Props.name}</p>
        </div>
    )
}