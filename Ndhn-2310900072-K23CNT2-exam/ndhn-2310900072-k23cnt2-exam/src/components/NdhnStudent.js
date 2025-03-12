import React, { Component } from 'react';

class NdhnStudent extends Component {
    constructor(props){
        super(props);
    }


    ndhnHandleView = (ndhnStudent)=>{
        this.props.onNdhnHandleView(ndhnStudent)
    }
    render() {
        let {renderNdhnStudent, key} = this.props;
        console.log("Student:",renderNdhnStudent);
        
        return (
            <>
                <tr>
                    <td>{key}</td>
                    <td>{renderNdhnStudent.ndhnId}</td>
                    <td>{renderNdhnStudent.NdhnStudentName}</td>
                    <td>{renderNdhnStudent.ndhnUserName}</td>
                    <td>{renderNdhnStudent.ndhnPassword}</td>
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