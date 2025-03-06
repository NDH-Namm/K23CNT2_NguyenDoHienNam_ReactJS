import React, { Component } from 'react';

class NdhnForm extends Component {
    render() {
        let {renderNdhnStudent} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={renderNdhnStudent.ndhnId} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={renderNdhnStudent.NdhnStudentName} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={renderNdhnStudent.ndhnAge} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={renderNdhnStudent.ndhnGender } >
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" value={renderNdhnStudent.ndhnBirthday } />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={renderNdhnStudent.ndhnBirthplace }>
                                    <option value={"HN"}>Hà Nội</option>
                                    <option value={"TPHCM"}>TP. Hồ Chí Minh</option>
                                    <option value={"ĐN"}>Đà Nẵng</option>
                                    <option value={"QN"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" defaultValue={renderNdhnStudent.ndhnAddress} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NdhnForm;