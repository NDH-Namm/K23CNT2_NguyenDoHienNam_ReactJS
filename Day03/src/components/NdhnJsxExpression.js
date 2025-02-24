import React from "react"

export default function NdnnJsxExpression() {
    //biến
    const name="Nguyễn Đỗ Hiền Nam";
    //biến đối tượng
    const user = {
        firstName:"Nam",
        lastName:"Nguyễn"
    }
    //hàm
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName ;
    }

    //element
    const element =(
        <div>
            {/* Biểu thức jsx */}
            <h2>{ fullName(user)} </h2>
            <hr/>
            <h3> Welcome to, {name}</h3>
        </div>
    );

    //ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3> Welcome to {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT2</h3>
        }
    }
    return(
        <div>
            <h1> NDHN - JSX Expression</h1>
            {/* sử dụng biến element */}
            {element}

            <hr/>
            {sayWelcome()}
            <hr/>
            {sayWelcome(name)}
            
        </div>
    )
}