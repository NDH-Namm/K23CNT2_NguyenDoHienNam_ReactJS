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
        {ndhnId:"SV001",NdhnStudentName:"Nguyễn Đỗ Hiền Nam",ndhnAge:20,ndhnGender:"Nam",ndhnBirthday:"26/10/2005",ndhnBirthplace:"HN",ndhnAddress:"Hoài Đức"},
        {ndhnId:"SV002",NdhnStudentName:"Bùi Trần Ngọc Quỳnh",ndhnAge:23,ndhnGender:"Nữ",ndhnBirthday:"21/10/2002",ndhnBirthplace:"TPHCM",ndhnAddress:"Hải Phòng"},
        {ndhnId:"SV003",NdhnStudentName:"Trần Nguyễn Hà Khánh",ndhnAge:19,ndhnGender:"Nữ",ndhnBirthday:"22/09/2006",ndhnBirthplace:"ĐN",ndhnAddress:"Nha Trang"},
        {ndhnId:"SV004",NdhnStudentName:"Trần Nguyễn Hà Nam",ndhnAge:19,ndhnGender:"Nữ",ndhnBirthday:"22/09/2006",ndhnBirthplace:"QN",ndhnAddress:"Chịu"},
      ],
      ndhnStudent:"",
    }
  }

  //Hàm xử lý sự kiện view student
  ndhnHandleView = (ndhnStudent)=>{
    this.setState({
      ndhnStudent:ndhnStudent,
    })
  }

  render() {
    //log 
    console.log("View Student:", this.state.ndhnStudent);
    
    return (
      <div>
        <h1 className='text-center'>
          Nguyễn Đỗ Hiền Nam - K23CNT2 - Mini Project1
        </h1>
        <section className="container-fluid mt-1">
          <div className="row">
            
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                
              {/* header */}
              <NdhnControl />
              {/* danh sách sinh viên */}
              <NdhnStudentsList  renderNdhnStudent={this.state.NdhnStudent} onNdhnHandleView={this.ndhnHandleView}/>
              </div>
            </div>

            <div className="col-5 grid-margin">
              {/* form */}
              <NdhnForm renderNdhnStudent = {this.state.ndhnStudent} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NdhnApp;