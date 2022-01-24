import React from "react";
import ProductsList from "./ProductsList";
import AddProduct from "./AddProduct";
class ProductsContainer extends React.Component {
  state = {
    products: [
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        elementDescription: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      }
    ]
  }

  // addProduct = (elementName, elementDescription, elementID) => {
  //   const newProduct = {
  //     elementName: elementName,
  //     elementDescription: elementDescription,
  //     elementID: elementID
  //   }
  //   this.setState({
  //     products: [...this.state.products, newProduct]
  //   })
  // }

  render() {
    return (
      <div>
        <h1>Products Container</h1>
        <AddProduct addProduct={this.addProduct} />
        <ProductsList products={this.state.products} />
      </div>
    );
  }
}

export default ProductsContainer;
