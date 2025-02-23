import logo from './logo.svg';
import './App.css';
import NdhnFuncComp from './Components/NdhnFuncComp';
import NdhnFuncComp1 from './Components/NdhnFuncComp1';

function NdhnApp() {
  //object
  const users = {
    fullname:'ai ma biet',
    age:20,
    phone:'0123456789'
  }
  return (
    <div className="container border mt-3">
      <h1>Demo Components - Props - State</h1>
      <hr/>
      <div className='alert alert-danger'>
          <NdhnFuncComp name="Nguỹn Nam" address="Xa Líu" company="Một thành viên" />  
          <hr/>
          <NdhnFuncComp name="a" address="huce" company="hufkce" />
        </div>
        <div className='alert alert-info'>
          <NdhnFuncComp1 renderInfo={users} />
        </div>
    </div>
  );
}

export default NdhnApp;
