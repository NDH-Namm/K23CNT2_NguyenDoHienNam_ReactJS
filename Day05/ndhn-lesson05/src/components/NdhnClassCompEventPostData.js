import React,{ Component } from "react";

class NdhnClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }

    //Hàm xử lí sự kiện
    ndhnEventHandleClick = ()=>{
        //Chuyển dự liệu lên App thông qua props
        this.props.onNdhnDataToApp("Dữ liệu từ component con - NdhnClassCompEventPostData");
    }
    render() {
        return(
            <div className="alert alert-success">
                <button className="btn btn-primary"
                    onClick={this.ndhnEventHandleClick}>
                        Button 1 - Chuyển dữ liệu lên App
                    </button>
            </div>
        );
    }
}

export default NdhnClassCompEventPostData;