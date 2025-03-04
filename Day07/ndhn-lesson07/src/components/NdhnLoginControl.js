import React, { Component } from 'react';
import NdhnLoginComp from './NdhnLoginComp';
import NdhnLogoutComp from './NdhnLogoutComp';

class NdhnLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    //Hàm xử lí sự kiện login
    ndhnHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
    render() {
        let {isLoggedIn}=this.state
        let ndhnElement = isLoggedIn?<NdhnLoginComp /> : <NdhnLogoutComp />
        return (
            <div className='alert alert-danger'>
                {ndhnElement}
                {
                    isLoggedIn? 
                        <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                        :<button onClick={this.ndhnHandleLogin}>Login</button>
                }
            </div>
        );
    }
}

export default NdhnLoginControl;