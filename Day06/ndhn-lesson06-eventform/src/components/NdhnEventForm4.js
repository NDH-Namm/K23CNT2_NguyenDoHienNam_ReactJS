import React, { Component } from "react";

class NdhnEventForm4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ndhnSelectCheckBox:["Apple"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    ndhnHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.ndhnSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
       
        this.setState({
            ndhnSelectCheckBox:selectedOptions
        });
    }

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.ndhnSelectCheckBox.includes("Apple")}
              onChange={this.ndhnHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.ndhnSelectCheckBox.includes("Banana")}
              onChange={this.ndhnHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.ndhnSelectCheckBox.includes("Orange")}
              onChange={this.ndhnHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default NdhnEventForm4;