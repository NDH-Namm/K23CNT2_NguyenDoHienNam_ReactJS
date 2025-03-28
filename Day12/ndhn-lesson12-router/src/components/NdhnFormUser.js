import React, { useState } from 'react'

export default function NdhnFormUser({onNdhnAddNew}) {
    const [id, setNdhnId] = useState('')
    const [ndhnFullName, setNdhnFullName] = useState('')
    const [ndhnUserName, setNdhnUserName] = useState('')
    const [ndhnPass, setNdhnPass] = useState('')
    
    const ndhnHandleSubmit = (event)=> {
        event.preventDefault();
        console.log(id, ndhnFullName, ndhnUserName, ndhnPass)
        onNdhnAddNew({ id, ndhnFullName, ndhnUserName, ndhnPass })
    }
  return (
    <div>
      <form>
            <p>Mã sinh viên:
                <input type='text' name='id' value={id} onChange={(ev)=>setNdhnId(ev.target.value)}/> </p>
            <p>Họ và tên:
                <input type='text' name='ndhnFullName' value={ndhnFullName} onChange={(ev)=>ndhnFullName(ev.target.value)}/> </p>
            <p>Tài khoản:
                <input type='text' name='ndhnUserName' value={ndhnUserName} onChange={(ev)=>ndhnUserName(ev.target.value)}/> </p>
            <p>Mật khẩu:
                <input type='password' name='ndhnPass' value={ndhnPass} onChange={(ev)=>ndhnPass(ev.target.value)}/> </p>
            <p>
                <button name='ndhnSave' onClick={ndhnHandleSubmit}>Save</button>
            </p>
      </form>
    </div>
  )
}
