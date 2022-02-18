import React from "react";
import ProductItem from "./ProductItem";

class ProductsList extends React.Component {
  render() {
    return (
      <div className="product-list">
        <ul>
          {this.props.products.map((product) => (
            <ProductItem
              key={product.elementID}
              product={product}
              deleteProductProps={this.props.deleteProductProps}
              updateProductName={this.props.updateProductName}
              updateProductDescription={this.props.updateProductDescription}
              updateProductID={this.props.updateProductID}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsList;
