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

  handleTruncate = (str, maxLength = 60) => {
    if (this.state.editing === false && str.length > maxLength) {
      const shortened = str.substr(0, maxLength) + "...";
      return shortened;
    } else {
      return str;
    }
  };

  render() {
    const { product, deleteProductProps, updateProductName, updateProductDescription, updateProductID } = this.props;
    const { elementName, elementDescription, elementID } = product;

    return (
      <div className="product-item">
        <span className="selector"></span>
        <input
          className="product-name"
          type="text"
          value={elementName}
          onChange={(e) =>
            updateProductName(e.target.value, elementID)
          }
        />
        <input
          className="product-description"
          onClick={this.handleEdit}
          value={this.handleTruncate(elementDescription)}
          onChange={(e) =>
            updateProductDescription(e.target.value, elementID)
          }
        />
        <div className="product-id">
          <input
            value={elementID}
            onChange={(e) =>
              updateProductID(e.target.value)
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
