import React, { Component } from 'react';

class NdhnEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnGioiTinh:'Nam', 
        }
    }

    //Hàm xử lí sự kiện change
    ndhnHandleChange = (event)=>{
        this.setState({
            ndhnGioiTinh:event.target.value,
        })
    }

    //Hàm xử lí sự kiện submit form
    ndhnHandleSubmit = (event)=>{
        event.preventDefault();
        alert('Giới tính của bạn là:' + this.state.ndhnGioiTinh)
    }
    render() {
        return (
            <div className='alert alert-success'>
                <h2> Form Input - Radio </h2>
                <form>
                    <div>
                        <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='ndhnGioitinh'  id='ndhnNam' className='mx-2'
                            value={'Nam'} checked={this.state.ndhnGioiTinh === 'Nam'} onChange={this.ndhnHandleChange}/> 
                            <label htmlFor='ndhnNam'>Nam</label>
                        <input type='radio' name='ndhnGioitinh'  id='ndhnNu' className='mx-2'
                            value={'Nữ'} checked={this.state.ndhnGioiTinh === 'Nữ'} onChange={this.ndhnHandleChange}/> 
                            <label htmlFor='ndhnNu'>Nữ</label>
                        <input type='radio' name='ndhnGioitinh'  id='ndhnKhac' className='mx-2'
                            value={'Khác'} checked={this.state.ndhnGioiTinh === 'Khác'} onChange={this.ndhnHandleChange}/> 
                            <label htmlFor='ndhnKhac'>Khác</label>
                    </div>
                    <button onClick={this.ndhnHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NdhnEventForm3;