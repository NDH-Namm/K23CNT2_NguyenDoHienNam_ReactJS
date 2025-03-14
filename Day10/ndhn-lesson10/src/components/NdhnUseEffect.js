import React, { useEffect, useState } from 'react'

export default function NdhnUseEffect() {
    //state
    const [ndhnCount, setNdhnCount] = useState(0);

    // useEffect sử dụng 1 tham số: được thực hiện mỗi khi render / re-render

    useEffect(()=>{
        console.log("Đây là useEffect 1 tham số");
    });
    // useEffect sử dụng 2 tham số; tham số thứ 2 là mảng rỗng => được gọi duy nhất 1 lần khi render
    useEffect(()=>{
        console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng []")
    },[]);

    //useEffect sử dụng 2 tham số; tham số thứ 2 là mảng các đối số phụ thuộc
    // => Được gọi mỗi khi đối số thay đổi
    //khởi tạo state là 1 mảng
        const ndhnArr = [10,12,20,22];
        const [ndhnArray, setNdhnArray] = useState(ndhnArr);

        useEffect(()=>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng đối số phụ thuộc [ndhnArray]")
        },[ndhnArray]);

        useEffect(()=>{
            console.log("Đây là useEffect 2 tham số, tham số thứ 2 là mảng rỗng [ndhnCount]")
        },[ndhnCount]);
    

         //Hàm xử lí sự kiện khi thêm mới phần tử vào mảng
         const ndhnHandleAddList=()=>{
            setNdhnArray([
                ...ndhnArray,
                parseInt(Math.random()*100),
            ])
        }

  return (
    <div className='alert alert-info'>
        <h2>Demo useEffect</h2>
        <h3>Count: {ndhnCount}</h3>
        <button onClick={()=>setNdhnCount(ndhnCount+1)}>Click here</button>

        <div>
            <h3>Array: {ndhnArray.toString()}</h3>
            <button onClick={ndhnHandleAddList}>Thêm</button>
        </div>
    </div>
  )
}
