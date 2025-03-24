import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
export default function NdhnEditUser() {
    const ndhnUser = {
            id:0,
            'ndhn_name':'',
            'ndhn_email':'',
            'ndhn_phone':'',
            'ndhn_active':true
        }
    
        const [ndhn_user, setNdhn_User] = useState(ndhnUser);
        const ndhnApi = "https://67e0d28258cc6bf7852307d0.mockapi.io/ndhn-k23cnt2-2310900072/ndhn_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(ndhnApi+'/'+`${id}`)
            .then(ndhn_response => {
                //Xử lí dữ liệu trả về từ API
                console.log(ndhn_response.data); // Dữ liệu từ API
                setNdhn_User(ndhn_response.data)
            })     
            .catch(error => {
                //Xử lí lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();        
        const ndhnHandleSubmit = (ev)=>{
            ev.preventDefault();
            console.log(ndhn_user);
            axios
            .put(ndhnApi+`/${id}`,ndhn_user)
            .then((ndhn_response)=> {
                alert('Cập nhật thành công!');
                navigate('/ndhn-list-user'); //Sau khi lưu, chuyển về trang danh sánh
            })
            
        }

  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
                <div className="mb-3 row">
                    <label htmlFor="ndhn_name" className="col-sm-2 col-form-label">FullName</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndhn_name"
                            name='ndhn_name'
                            value={ndhn_user.ndhn_name}
                            onChange={(ev)=>setNdhn_User({...ndhn_user,ndhn_name:ev.target.value})} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndhn_email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndhn_email"
                        name='ndhn_email'
                        value={ndhn_user.ndhn_email}
                        onChange={(ev)=>setNdhn_User({...ndhn_user,ndhn_email:ev.target.value})} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndhn_phone" className="col-sm-2 col-form-label">Phone</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="ndhn_phone"
                        name='ndhn_phone'
                        value={ndhn_user.ndhn_phone}
                        onChange={(ev)=>setNdhn_User({...ndhn_user,ndhn_phone:ev.target.value})} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="ndhn_active" className="col-sm-2 col-form-label">Active</label>
                    <div className="col-sm-10">
                        <input type="radio"  id="ndhn_active_true" className='mx-3' 
                            onChange={(ev)=>setNdhn_User({...ndhn_user,ndhn_active:ev.target.value})}
                             value={true}
                             name='ndhn_active'  />
                         <label htmlFor='ndhn_active_true'>Hoạt động</label>
                        <input type="radio"  id="ndhn_active_true" className='mx-3'
                            onChange={(ev)=>setNdhn_User({...ndhn_user,ndhn_active:ev.target.value})}
                             value={false} 
                             name='ndhn_active' />
                         <label htmlFor='ndhn_active_false'>Tạm khoá</label>
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button className='btn btn-primary mx-2 px-3' name='btnNdhnCreate'
                            onClick={ndhnHandleSubmit}
                        >Update</button>
                        <button className='btn btn-secondary mx-2 px-3' name='btnNdhnBack'>Back</button>
                    </div>
                </div>
            </form >
    </div>
  )
}
