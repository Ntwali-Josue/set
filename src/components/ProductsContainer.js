import React from "react";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";
import home from "../images/Home.svg";
class ProductsContainer extends React.Component {
  state = {
    products: [
      {
        elementName: "Baccalaureate Nurse & Patient-centered",
        elementDescription:
          "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1",
      },
      {
        elementName: "Techniques to Effective Communication",
        elementDescription:
          "Use a broad base of techniques to communicate effectively with clients,families, healthcare teams, and communities.",
        elementID: "RN-BSN-PO2",
      },
    ],
    add: false,
  };

  addProduct = (elementName, elementDescription, elementID) => {
    const newProduct = {
      elementName: elementName,
      elementDescription: elementDescription,
      elementID: elementID,
    };
    this.setState({
      products: [...this.state.products, newProduct],
    });
  };

  deleteProduct = (elementID) => {
    const newProducts = this.state.products.filter(
      (product) => product.elementID !== elementID
    );
    this.setState({
      products: newProducts,
    });
  };

  updateProductName = (elementName, elementID) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.elementID === elementID) {
          product.elementName = elementName;
        }
        return product;
      }),
    });
  };

  updateProductDescription = (elementDescription, elementID) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.elementID === elementID) {
          product.elementDescription = elementDescription;
        }
        return product;
      }),
    });
  };

  updateProductID = (elementID) => {
    this.setState({
      products: this.state.products.map((product) => {
        if (product.elementID === elementID) {
          product.elementID = elementID;
        }
        return product;
      }),
    });
  };

  render() {
    return (
      <div>
        <div className="categories">
          <span>
            <img src={home} alt="home icon" />
          </span>
          <span className="rn-program">
            <b>RN Program Outcomes</b>
          </span>
          <span className="desc">
            Description: A registered nurse, or RN, typically monitors patients,
            administers medications, keeps records, consults with healthcare
            providers, educates patients and more. They typically do not need to
            meet the master's degree requirement of a nurse practitioner.
          </span>
          <span>RN</span>
          <span
            className="add"
            onClick={() => this.setState({ add: !this.state.add })}
          >
            {" "}
            &#x22EE;
          </span>
        </div>
        {this.state.add ? <AddProduct addProduct={this.addProduct} /> : null}
        <ProductsList
          products={this.state.products}
          deleteProductProps={this.deleteProduct}
          updateProductName={this.updateProductName}
          updateProductDescription={this.updateProductDescription}
          updateProductID={this.updateProductID}
        />
      </div>
    );
  }
}

export default ProductsContainer;
