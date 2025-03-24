import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function NdhnListUser() {
    //state
    const [ndhnListUser, setNdhnListUser] = useState([])
    const ndhnApi = "https://67e0d28258cc6bf7852307d0.mockapi.io/ndhn-k23cnt2-2310900072/ndhn_users"

    useEffect(()=>{
        axios.get(ndhnApi)
        .then(ndhn_response => {
            //Xử lí dữ liệu trả về từ API
            console.log(ndhn_response.data); // Dữ liệu từ API
            setNdhnListUser(ndhn_response.data)
        })     
        .catch(error => {
            //Xử lí lỗi
            console.error('Có lỗi xảy ra:', error);
        });
    },[])
 
    const ndhnHandleDelete = async (ndhnId)=>{
        if(window.confirm('Bạn có muốn xoá không?')){
            await axios.delete(ndhnApi+"/"+ndhnId);

            let ndhnListUserDelete = ndhnListUser.filter(x=>x.id !=ndhnId);
            setNdhnListUser(ndhnListUserDelete);
        }
    }

    const navigate = useNavigate();
    const ndhnHandleUpdate = (ndhnId) =>{
        navigate(`/ndhn-edit-user/${ndhnId}`);
    }
  return (
    <div>
      <h2>Danh sách user</h2>
      <table className="table table-bordered">
        <thead>
            <tr>
                <th>User Id</th>
                <th>FullName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Active</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {/* //hiện thị danh sách user */}
            {
                ndhnListUser.map((ndhnUserItem,index)=>{
                    return(
                        <tr>
                            <td>{ndhnUserItem.id}</td>
                            <td>{ndhnUserItem.ndhn_name}</td>
                            <td>{ndhnUserItem.ndhn_email}</td>
                            <td>{ndhnUserItem.ndhn_phone}</td>
                            <td>
                                {ndhnUserItem.ndhn_active?
                                <span className="badge text-bg-success">Hoạt động</span>
                                :<span className="badge text-bg-danger">Tạm khoá</span>}
                            </td>
                            <td>
                                <button onClick={()=> ndhnHandleUpdate(ndhnUserItem.id)}>Edit</button>
                                <button onClick={(ev)=> ndhnHandleDelete(ndhnUserItem.id)}>Delete</button>
                                
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
    </div>
  )
}
