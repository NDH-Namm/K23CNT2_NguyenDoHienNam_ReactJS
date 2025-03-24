import React from 'react'
import { BrowserRouter as NdhnRouter, Route, Routes } from 'react-router-dom'
import NdhnNarBar from './components/NdhnNarBar'
import NdhnHome from './components/NdhnHome'
import NdhnListUser from './components/NdhnListUser'
import NdhnCreateUser from './components/NdhnCreateUser'
import NdhnEditUser from './components/NdhnEditUser'
export default function NdhnApp() {
  return (
    <div className='container border my-3 p-3'>
      <h1 className='alert alert-danger text-center'>K23CNT2 - Nguyễn Đỗ Hiền Nam - 2310900072</h1>
      <hr/>
      <NdhnRouter>
        <NdhnNarBar />
        <hr/>
        <Routes>
          <Route path='/' element={<NdhnHome/>} />
          <Route path='/ndhn-list-user' element={<NdhnListUser/>} />
          <Route path='/ndhn-create-user' element={<NdhnCreateUser/>} />
          <Route path='/ndhn-edit-user/:id' element={<NdhnEditUser/>} />
        </Routes>
      </NdhnRouter>
    </div>
  )
}
