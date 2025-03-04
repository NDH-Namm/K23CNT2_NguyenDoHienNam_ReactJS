import React from "react"

export default function NdhnRenderList() {
    const ndhnList = ["Nguyễn Nam", "ReactJS","Fit-NTU"];

    const ndhnElement = ndhnList.map(item=>{
        return <li>{item}</li>
    })

    return (
        <div className="alert alert-success">
            <h2>Danh sách:</h2>
            <ul>
                {
                    ndhnList.map(item=>{
                        return <li>{item}</li>
                    })
                }
            </ul>
            <hr/>
            {ndhnElement}
        </div>
    )
}