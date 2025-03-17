import React, { useState } from 'react'
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom'
import NdhnNavNar from './components/NdhnNavNar'
import NdhnHome from './components/NdhnHome'
import NdhnAbout from './components/NdhnAbout'
import NdhnContact from './components/NdhnContact'
import NdhnListUser from './components/NdhnListUser'
import NdhnFormUser from './components/NdhnFormUser'
export default function NdhnApp() {
    
  const listUsers = [
    {id:"SV001", ndhnFullName:'Nguyễn Đỗ Hiền Nam', ndhnUserName:'Nguỹn Nam', ndhnPass:'1234567'},
    {id:"SV002", ndhnFullName:'Nguyễn A', ndhnUserName:'Nguỹn A', ndhnPass:'12345678'},
    {id:"SV003", ndhnFullName:'Nguyễn B', ndhnUserName:'Nguỹn B', ndhnPass:'12345679'},
  ]

  const[ndhnUsers, setNdhnUsers] = useState(listUsers)

  //Hàm xử lí sự kiện thêm mới
  const ndhnHandleAdd = (ndhnParam)=>{
    console.log('ndhnHandleAdd:', ndhnParam);

    setNdhnUsers()
  }
  return (
    <div className='container border my-3'>
      <h1>React Router Dom - Demo -[Nguyễn Đỗ Hiền Nam - K23CNT2]</h1>
      <hr/>
      <Router>
        <NdhnNavNar />
        <Routes>
          <Route path='/' element = {<NdhnHome />} />
          <Route path='/about' element = {<NdhnAbout />} />
          <Route path='/contact' element = {<NdhnContact />} />
          <Route path='/list-user' element = {<NdhnListUser renderNdhnUsers={ndhnUsers}/>} />
          <Route path='/create-user' element = {<NdhnFormUser onNdhnAddNew={ndhnHandleAdd}/>} />
        </Routes>
      </Router>
    </div>
  )
}
