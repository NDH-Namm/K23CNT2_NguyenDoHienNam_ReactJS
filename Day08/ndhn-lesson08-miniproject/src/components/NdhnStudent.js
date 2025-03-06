import React, { Component } from 'react';

class NdhnStudent extends Component {
    constructor(props){
        super(props);
    }

    //Hàm xử lí chức năng xem
    ndhnHandleView = (ndhnStudent)=>{
        //Chuyển lên ndhnStudentList
        this.props.onNdhnHandleView(ndhnStudent)
    }
    render() {
        //lấy đối tượng dl chuyển từ NdhnStudentList
        let {renderNdhnStudent, key} = this.props;
        console.log("Student:",renderNdhnStudent);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNdhnStudent.ndhnId}</td>
                    <td>{renderNdhnStudent.NdhnStudentName}</td>
                    <td>{renderNdhnStudent.ndhnAge}</td>
                    <td>{renderNdhnStudent.ndhnGender}</td>
                    <td>
                        <div className="template-demo">
                            <button type="button" className="btn btn-danger btn-icon-text"
                                onClick={()=>this.ndhnHandleView(renderNdhnStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}

export default NdhnStudent;