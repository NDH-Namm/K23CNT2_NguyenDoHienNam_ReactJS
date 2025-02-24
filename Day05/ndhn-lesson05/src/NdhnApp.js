import React, { Component } from "react";
import NdhnFuncCompEvent1 from "./components/NdhnFuncCompEvent1";
import NdhnClassCompEvent1 from "./components/NdhnClassCompEvent1";
import NdhnFuncCompEventProps from "./components/NdhnFuncCompEventProps";
import NdhnClassCompEventProps from "./components/NdhnClassCompEventProps";
import NdhnClassCompEventState from "./components/NdhnClassCompEventState";
import NdhnClassCompEventPostData from "./components/NdhnClassCompEventPostData";



class NdhnApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnNoiDung:"Chưa có gì",
        }
    }
    //Hàm xử lí dữ liệu khi component con chuyển dữ liệu lên
    ndhnHandleDataToApp = (content)=>{
        alert(content);
        this.setState()
    }
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
                <div> 
                    <h2>Class Component - Event; props</h2>
                    <NdhnClassCompEventProps ndhnRenderTitle = "Welcome to Lam"/>
                </div>

                <div> 
                    <h2>Class Component - Event; state</h2>
                    <NdhnClassCompEventState />
                </div> 

                <div>
                    <h1>{this.state.ndhnNoiDung}</h1>
                    <h2>Class Component - Event; Post Data to App </h2>
                    <NdhnClassCompEventPostData onNdhnDataToApp={this.ndhnHandleDataToApp}/>
                </div> 
                
            </div>
        );
    }
}

export default NdhnApp;