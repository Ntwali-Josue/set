import React from "react";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";
import home from "../images/Home.svg";
class ProductsContainer extends React.Component {
  state = {
    products: [
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription:
          "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1",
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription:
          "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO2",
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription:
          "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO3",
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription:
          "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO4",
      },
      {
        elementName: "Altruism, Integrity & Social Justice",
        elementDescription:
          "Practice professionalism, including the inherent values of altruism,autonomy, human dignity, integrity, and social justice.",
        elementID: "RN-BSN-PO6",
      },
    ],
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
          <img src={home} alt="home icon" />
          <span><b>RN Program Outcomes</b></span>
          <span className="desc">
            Description: A registered nurse, or RN, typically monitors patients,
            administers medications, keeps records, consults with healthcare
            providers, educates patients and more. They typically do not need to
            meet the master's degree requirement of a nurse practitioner.
          </span>
          <span>RN</span>
          <span> &#x22EE;</span>
        </div>
        <AddProduct addProduct={this.addProduct} />
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
