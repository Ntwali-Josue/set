import React from "react";
import deleteIcon from "../images/delete.svg";

class ProductItem extends React.Component {
  state = {
    editing: false,
  };

  handleEdit = () => {
    this.setState({
      editing: true,
    });
  };

  handleDoneEdit = (e) => {
    if (e.key === "Enter") {
      this.setState({ editing: false });
    }
  };

  handleFocus = () => {
    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
  };

  handleTruncate = (str, maxLength = 60) => {
    if (this.state.editing === false && str.length > maxLength) {
      const shortened = str.substr(0, maxLength) + "...";
      return shortened;
    } else {
      return str;
    }
  };

  render() {
    const { product, deleteProductProps, updateProduct } = this.props;
    const { elementName, elementDescription, elementID } = product;

    return (
      <div className="product-item">
        <input
          className="product-name"
          type="text"
          value={elementName}
          onChange={(e) =>
            updateProduct(e.target.value, elementID, elementDescription)
          }
        />
        <input
          className="product-description"
          onClick={this.handleEdit}
          value={this.handleTruncate(elementDescription)}
          onChange={(e) =>
            updateProduct(e.target.value, elementID, elementName)
          }
        />
        <div className="product-id">
          <input
            value={elementID}
            onChange={(e) =>
              updateProduct(e.target.value, elementName, elementDescription)
            }
          />
          <img
            className="d-block"
            onClick={() => deleteProductProps(elementID)}
            src={deleteIcon}
            alt="delete icon"
          />
        </div>
      </div>
    );
  }
}

export default ProductItem;
