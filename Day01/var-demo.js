var x=100; //global
function varDemo(){
    console.log("x ben trong ham:",x);
}

//
console.log("x ben trong ham:",x);

// thực thi hàm:
varDemo();

//local
function fn_demo(){
    var y=200; //local
    console.log("y ben trong ham",y);
}
fn_demo();
// y bên ngoài hàm
console.log("y ben ngoai ham",y); //==error: ReferenceError: y is not defined

//ví dụ: ChatGPT / DeepSeek

