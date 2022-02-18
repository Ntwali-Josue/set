import React from "react";
import add from "../images/add.svg";

class AddProduct extends React.Component {
  state = {
    elementName: "",
    elementDescription: "",
    elementID: "",
  };

  handleNameChange = (e) => {
    this.setState({
      elementName: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      elementDescription: e.target.value,
    });
  };

  handleIDChange = (e) => {
    this.setState({
      elementID: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { elementName, elementDescription, elementID } = this.state;
    e.preventDefault();
    if (elementName && elementDescription && elementID) {
      this.props.addProduct(elementName, elementDescription, elementID);
      this.setState({
        elementName: "",
        elementDescription: "",
        elementID: "",
      });
    } else {
      alert("Please fill all fields");
    }
  };

  render() {
    return (
      <div className="add-product">
        <span className="selector"></span>
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            className="input-style"
            placeholder="Outcome name"
            value={this.state.elementName}
            onChange={this.handleNameChange}
            required
          />
          <input
            type="text"
            className="input-style desc-input"
            placeholder="Description"
            value={this.state.elementDescription}
            onChange={this.handleDescriptionChange}
            required
          />
          <input
            type="text"
            className="input-style id-input"
            placeholder="ID"
            value={this.state.elementID}
            onChange={this.handleIDChange}
            required
          />
          <button type="submit" className="submit-btn">
            <img src={add} alt="submit" />
          </button>
        </form>
      </div>
    );
  }
}

export default AddProduct;
