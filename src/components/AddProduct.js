import React from "react";
import add from "../images/add.svg";

class AddProduct extends React.Component {
  state = {
    elementName: "",
    elementDescription: "",	
    elementID: ""
  }

  handleNameChange = (e) => {
    this.setState({
      elementName: e.target.value,
    })
  }

  handleDescriptionChange = (e) => {
    this.setState({
      elementDescription: e.target.value,
    })
  }

  handleIDChange = (e) => {
    this.setState({
      elementID: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state.elementName, this.state.elementDescription, this.state.elementID);
    this.setState({
      elementName: "",
      elementDescription: "",
      elementID: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Outcome name" value={this.state.elementName} onChange={this.handleNameChange} />
        <input type="text" placeholder="Description" value={this.state.elementDescription} onChange={this.handleDescriptionChange} />
        <input type="text" placeholder="ID" value={this.state.elementID} onChange={this.handleIDChange} />
        <button type="submit">
          <img src={add} alt="submit" />
        </button>
      </form>
    )
  }
}

export default AddProduct;
