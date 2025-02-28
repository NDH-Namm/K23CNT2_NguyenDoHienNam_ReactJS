import React, { Component } from 'react';

class NdhnEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnName:'Nam',
            ndhnAge:20,
            ndhnGender:'Male',
            ndhnCourse:'CSS3'
        }
    }

    // Hàm xử lý sự kiện change
    ndhnHandleChange = (event)=>{
        // lấy tên điều khiển
        let name = event.target.name;
        // Lấy giá trị trên điều khiển đang thao tác
        let value = event.target.value;

        // Cập nhật state
        this.setState({
            [name]:value,
        })
    }
    // Sự kiện khi submit form
    ndhnHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert(this.state.ndhnName + "\n" + this.state.ndhnAge);

        // Chuyển dữ liệu trên form lên App component (NdhnApp);
        this.props.onNdhnHandleSubmit(this.state);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Form Student Info </h2>
                <form>
                    <div>
                        <label htmlFor='ndhnName'>Student Name:</label>
                        <input type='text' name='ndhnName' id='ndhnName'
                            value={this.state.ndhnName}
                            onChange={this.ndhnHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ndhnAge'>Student Age:</label>
                        <input type='text' name='ndhnAge' id='ndhnAge'
                            value={this.state.ndhnAge}
                            onChange={this.ndhnHandleChange} />
                    </div>
                    <div>
                        <label htmlFor='ndhnGender'>Student Gender:</label>
                        <div>
                            <input type='radio' name='ndhnGender' id='ndhnMale' className='mx-2'
                                value={'Male'}
                                checked={this.state.ndhnGender === 'Male'}
                                onChange={this.ndhnHandleChange} />
                            <label htmlFor='ndhnMale'> Male</label>
                        </div>
                        <div>
                            <input type='radio' name='ndhnGender' id='ndhnFemale' className='mx-2'
                                value={'Female'}
                                checked={this.state.ndhnGender === 'Female'}
                                onChange={this.ndhnHandleChange} />
                            <label htmlFor='ndhnFemale'> Female</label>
                        </div>
                        <div>
                            <input type='radio' name='ndhnGender' id='ndhnNone' className='mx-2'
                                value={'None'}
                                checked={this.state.ndhnGender === 'None'}
                                onChange={this.ndhnHandleChange} />
                            <label htmlFor='ndhnNone'> None</label>
                        </div>
                    </div>
                    <div>
                        <label htmlFor='ndhnCourse'>
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
                    </div>
                    <button onClick={this.ndhnHandleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NdhnEventForm5;