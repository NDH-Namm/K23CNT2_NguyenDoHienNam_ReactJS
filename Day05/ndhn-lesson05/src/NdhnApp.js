import React, { Component } from "react";
import NdhnFuncCompEvent1 from "./components/NdhnFuncCompEvent1";
import NdhnClassCompEvent1 from "./components/NdhnClassCompEvent1";
import NdhnFuncCompEventProps from "./components/NdhnFuncCompEventProps";


class NdhnApp extends Component {
    render() {
        return(
            <div className="container border mt-3">
                <h1 className="text-center alert alert-info my-2">K23CNT3 - Nguyễn Đỗ Hiền Nam - Event and Form</h1>
                <hr/>
                <div>
                    <h2>Function Component - Event</h2>   
                    <NdhnFuncCompEvent1 />
                </div>
                <hr/>
                <div> 
                    <h2>Class Component - Event</h2>
                    <NdhnClassCompEvent1 />
                </div>
                <div> 
                    <h2>Function Component - Event; props</h2>
                    <NdhnFuncCompEventProps ndhnRenderName="Lam cute" />
                </div> 
            </div>
        );
    }
}

export default NdhnApp;