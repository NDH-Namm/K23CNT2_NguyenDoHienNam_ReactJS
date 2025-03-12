import React, { useState } from 'react';

export default function NdhnUseState() {
    //khởi tạo function
    const [ndhnCount, setNdhnCount] = useState(0);

    //khởi tạo state là 1 mảng
    const ndhnArr = [10,12,20,22];
    const [ndhnArray, setNdhnArray] = useState(ndhnArr);

    //khởi tạo state với mảng object
    const ndhnStudents = [
        {ndhnId:"SV001",ndhnName:"Nguỹn Nam",ndhnAge:20},
        {ndhnId:"SV002",ndhnName:"Nguỹn N",ndhnAge:18},
    ];
    const [ndhnStudentList, setNdhnStudenList] = useState(ndhnStudents);

    //Hàm xử lí sự kiện khi thêm mới phần tử vào mảng
        const ndhnHandleAddList=()=>{
            setNdhnArray([
                ...ndhnArray,
                parseInt(Math.random()*100),
            ])
        }

    //Hàm xử lí sự kiện thêm mới sinh viên
    const ndhnHandleAddNewStudent = () =>{
        let ndhnStudent = {
            ndhnId:"SV003",
            ndhnName:"Nguyễn T A",
            ndhnAge:23,
        };
        //Thêm vào state ndhnStudentList
        setNdhnStudenList([
            ...ndhnStudentList,
            ndhnStudent
        ])

        console.log("List: ", ndhnStudentList);
    }    
        return (
            <div className='alert alert-danger'>
                <h2>useState Demo</h2>
                <div>
                    <h3>Count: {ndhnCount}</h3>
                    <button onClick={()=>setNdhnCount(ndhnCount+1)}>Tăng + </button>
                    <button onClick={()=>setNdhnCount(ndhnCount-1)}>Giảm - </button>
                </div>
                <div>
                    <h3>Array: {ndhnArray.toString()}</h3>
                    <button onClick={ndhnHandleAddList}>Thêm phần tử</button>
                </div>
                <div>
                    <h3>Danh sách sinh viên</h3>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Age</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ndhnStudentList.map((ndhnStudent,index)=>{
                                    return <>
                                        <tr>
                                            <td>{ndhnStudent.ndhnId}</td>
                                            <td>{ndhnStudent.ndhnName}</td>
                                            <td>{ndhnStudent.ndhnAge}</td>
                                        </tr>
                                    </>
                                })
                            }
                        </tbody>
                        <tfoot>
                            <button onClick={ndhnHandleAddNewStudent}>Thêm mới sinh viên</button>
                        </tfoot>
                    </table>
                </div>
            </div>

        );
    }
