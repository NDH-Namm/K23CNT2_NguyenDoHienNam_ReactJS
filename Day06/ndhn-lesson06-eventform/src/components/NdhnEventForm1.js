import React, { Component } from 'react';

class NdhnEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnStudentName:'Nguyễn Nam',
        }
    }
    //Hàm xử lí sự kiện khi dữ liệu trên textbox (ndhnStudentName) thay đổi
    ndhnHandleChange = (event)=>{
        //Cập nhật lại state
        this.setState({
            ndhnStudentName:event.target.value,
        })
    }
    //Khi submit form, lấy dữ liệu và hiển thị
    ndhnHandleSubmit = (ev) =>{
        alert('Xin chào:' + this.state.ndhnStudentName);
        ev.preventDefault();
        }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form Input</h2>
                <form onSubmit={this.ndhnHandleSubmit}>
                    <label htmlFor='ndhnStudentName'>
                        <input type='text' name='ndhnStudentName' id='ndhnStudentName' 
                            value={this.state.ndhnStudentName}
                            onChange={this.ndhnHandleChange}
                        />
                    </label>
                    <button className='btn btn-primary'>Click here</button>
                </form>
            </div>
        );
    }
}

export default NdhnEventForm1;