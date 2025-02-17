
import NdnnJsxExpression from './components/NdhnJsxExpression';
import NdhnFuncComp from './components/NdhnFuncComp';
import NdhnClassComp from './components/NdhnClassComp';

function NdhnApp() {
  return (
    <div className="container border mt-3 bg-white">
     <h1>React JS Lesson03 - Nguyễn Đỗ Hiền Nam</h1>

     <NdnnJsxExpression />

     <hr/>
     {/* Sử dụng function components */}
     <NdhnFuncComp />

     {/* sử dụng class components */}
     <NdhnClassComp>f</NdhnClassComp>
    </div>
  );
}

export default NdhnApp;
