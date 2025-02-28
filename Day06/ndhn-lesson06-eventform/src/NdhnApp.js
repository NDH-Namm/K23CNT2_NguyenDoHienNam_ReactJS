import React, { Component } from 'react';
import NdhnEventForm1 from './components/NdhnEventForm1';
import NdhnEventForm2 from './components/NdhnEventForm2';
import NdhnEventForm3 from './components/NdhnEventForm3';
import NdhnEventForm4 from './components/NdhnEventForm4';
import NdhnEventForm5 from './components/NdhnEventForm5';

class NdhnApp extends Component {



  //Hàm xử lí dự liệu từ form student
  onNdhnHandleSubmitForm = (param)=>{
    console.log('Student:',param);
  }
  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'> Event Form - Demo </h1>
        <hr/>
        <NdhnEventForm1 />
        <NdhnEventForm2 />
        <NdhnEventForm3 />
        <NdhnEventForm4 />
        <NdhnEventForm5 onNdhnHandleSubmit={this.onNdhnHandleSubmitForm}/>
      </div>
    );
  }
}

export default NdhnApp;