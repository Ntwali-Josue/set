import React from "react";

class ProductItem extends React.Component {
  render() {
    return (
      <div className="product-item">
        <h3>{this.props.product.elementName}</h3>
        <p>{this.props.product.elementDescription}</p>
        <span>{this.props.product.elementID}</span>
      </div>
    );
  }
}

export default ProductItem;
