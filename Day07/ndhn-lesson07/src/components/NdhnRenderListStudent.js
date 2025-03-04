import React, { Component } from 'react';

class NdhnRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnStudents:[
                {ndhnId:"NTU01", ndhnName:"Nguyễn Đỗ Hiền Nam", ndhnAge:20, ndhnClass:"K23CNT2"},
                {ndhnId:"NTU02", ndhnName:"Nguyễn Ngọc A", ndhnAge:21, ndhnClass:"K23CNT2"},
                {ndhnId:"NTU03", ndhnName:"Nguyễn Ngọc B", ndhnAge:22, ndhnClass:"K23CNT2"},
                {ndhnId:"NTU04", ndhnName:"Nguyễn Ngọc C", ndhnAge:23, ndhnClass:"K23CNT2"},
            ],
        }
    }
    render() {
        let ndhnElement = this.state.ndhnStudents.map((ndhnItem, index)=>{
            return(
                <tr>
                    <td>{index+1}</td>
                    <td>{ndhnItem.ndhnId}</td>
                    <td>{ndhnItem.ndhnName}</td>
                    <td>{ndhnItem.ndhnAge}</td>
                    <td>{ndhnItem.ndhnClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
                </tr>
            )
        })
        return (
            <div className='alert alert-info'>
                <h2>Danh sách sinh viên</h2>
                <table>
                    <thread>
                        <tr>
                            <th>STT</th>
                            <th>ndhnId</th>
                            <th>ndhnName</th>
                            <th>ndhnAge</th>
                            <th>ndhnClass</th>
                            <th>Action</th>
                        </tr>
                    </thread>
                    <tbody>
                      {ndhnElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NdhnRenderListStudent;