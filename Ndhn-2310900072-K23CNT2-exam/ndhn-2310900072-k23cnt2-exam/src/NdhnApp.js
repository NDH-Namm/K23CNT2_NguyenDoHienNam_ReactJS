import React, { Component } from 'react';
import NdhnControl from './components/NdhnControl';
import NdhnStudentsList from './components/NdhnStudentsList';
import NdhnForm from './components/NdhnForm';
import NdhnStudent from './components/NdhnStudent';

class NdhnApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      NdhnStudent:[
        {ndhnId:"2310900072",NdhnStudentName:"Nguyễn Đỗ Hiền Nam",ndhnUserName:"Nguyễn Nam",ndhnPassword:"123456789"},
        {ndhnId:"SV002",NdhnStudentName:"Bùi Trần Ngọc Quỳnh",ndhnUserName:"Bùi Quỳnh",ndhnPassword:"12345678"},
        {ndhnId:"SV003",NdhnStudentName:"Trần Nguyễn Hà Khánh",ndhnUserName:"Hà Khánh",ndhnPassword:"1234567"},
      ],
      ndhnStudent:"",
    }
  }

  ndhnHandleView = (ndhnStudent)=>{
    this.setState({
      ndhnStudent:ndhnStudent,
    })
  }

  render() {
    console.log("View Student:", this.state.ndhnStudent);
    
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Đỗ Hiền Nam - K23CNT2 - Exam
        </h1>
        <section className="container-fluid mt-1">
          <div className="row">
            
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
              
              <NdhnControl />
              <NdhnStudentsList  renderNdhnStudent={this.state.NdhnStudent} onNdhnHandleView={this.ndhnHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              <NdhnForm renderNdhnStudent = {this.state.ndhnStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NdhnApp;