import React from 'react'

export default function NdhnListUser({renderNdhnUsers}) {

    const ndhnElements = renderNdhnUsers.map((ndhnItem, index)=>{
        return(
        <>
            <tr key={index}> 
                <td>{index+1}</td>
                <td>{ndhnItem.id}</td>
                <td>{ndhnItem.ndhnFullName}</td>
                <td>{ndhnItem.ndhnUserName}</td>
                <td>{ndhnItem.ndhnPass}</td>

            </tr>
        </>)
    })
  return (

    <div>
      <h2>Danh sách tài khoản</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>UserName</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {ndhnElements}
            </tbody>
        </table>
    </div>
  )
}
