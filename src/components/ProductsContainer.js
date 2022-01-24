import React from "react";

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
        description: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        description: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      },
      {
        elementName: "Baccalaureate Nurse & Patient-centered Care",
        description: "Practice using caring, compassionate, culturally competent, and evidence-based practices in the roles of the baccalaureate nurse using the nursing process to provide patient/client-centered care in a variety of healthcare settings.",
        elementID: "RN-BSN-PO1" 
      }
    ]
  }

  render() {
    return (
      <div>
        <h1>Products Container</h1>
        <ul>
          {this.state.products.map(product => (
            <li key={product.elementID}>
              <h2>{product.elementName}</h2>
              <p>{product.elementDescription}</p>
              <p>{product.elementID}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductsContainer;
