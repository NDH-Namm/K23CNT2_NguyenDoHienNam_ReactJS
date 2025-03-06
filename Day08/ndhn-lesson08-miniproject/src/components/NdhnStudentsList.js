import React, { Component } from 'react';
import NdhnStudent from './NdhnStudent';

class NdhnStudentsList extends Component {
    constructor(props){
        super(props);

    }
    //Hàm xử lí sự kiện xem
    ndhnHandleView = (ndhnStudent)=>{
        //Chuyển dl lên NdhnApp
        this.props.onNdhnHandleView(ndhnStudent)
    }
    render() {
        //lấy dl trong props từ NdhnApp chuyển xuống
        let{renderNdhnStudent} = this.props;
        console.log("List:",renderNdhnStudent);
        
        //Chuyển dl vào NdhnStudent để hiển thị
        let ndhnElementStudent = renderNdhnStudent.map((ndhnItem,index)=>{
            return <NdhnStudent key={index} renderNdhnStudent={ndhnItem} onNdhnHandleView={this.ndhnHandleView}/>
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>

                        {ndhnElementStudent}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default NdhnStudentsList;