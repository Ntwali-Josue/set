import React from "react";

class ProductItem extends React.Component {

  state = {
    editing: false
  }

  handleEdit = () => {
    this.setState({
      editing: true
    })
  }

  handleDoneEdit = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false })
    }
  }

  render() {


    return (
      <div className="product-item">
        <div className="product-name">{this.props.product.elementName}
        </div>
        <div className="product-description">{this.props.product.elementDescription}
        </div>
        <div className="product-id">{this.props.product.elementID}
        <button onClick={() => this.props.deleteProductProps(this.props.product.elementID)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
