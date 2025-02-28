import React, { Component } from 'react';

class NdhnEventForm2 extends Component {
    constructor(props){
        super(props);
        this.state={
            ndhnCourse: 'CSS3',
        }
    }
    //Hàm xử lí sự kiện khi thay đổi khoá học
    ndhnHandleChange = (event)=>{
        //Cập nhật lại state
        this.setState({
            ndhnCourse:event.target.value,
        })
    }
    //Hàm xử lí sự kiện khi submit form
    ndhnHandleSubmit = (event)=>{
        alert('Khoá học bạn chọn:' + this.state.ndhnCourse);
        event.preventDefault();
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Select</h2>
                <form >
                    <label htmlFor=''>
                       <select name='ndhnCourse' id='ndhnCourse'
                            value={this.state.ndhnCourse}
                            onChange={this.ndhnHandleChange} >
                        <option value={'HTML5'}>HTML5</option>
                        <option value={'CSS3'}>CSS3</option>
                        <option value={'Javascript'}>Javascript</option>
                        <option value={'Jquery'}>Jquery</option>
                        <option value={'Bootstrap'}>Bootstrap</option>
                       </select>
                    </label>
                    <button className='btn btn-primary' onClick={this.ndhnHandleSubmit}>Click here</button>
                </form>
            </div>
        );
    }
}

export default NdhnEventForm2;