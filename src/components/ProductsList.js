import React from "react";
import ProductItem from "./ProductItem";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="product-list">
        <ul>
          {this.props.products.map(product => (
            <ProductItem key={product.elementID} product={product} deleteProductProps={this.props.deleteProductProps} updateProduct={this.props.updateProduct} /> 
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
