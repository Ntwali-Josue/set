import React from "react";

class AddOutcome extends React.Component {
  render() {
    return (
      <div className="add-outcome">
        <button type="button" onClick={() => this.props.toggleAdd()}>
         <span className="plus">+</span> Add Outcome
        </button>
        <span>&#x22EF;</span>
      </div>
    );
  }
}

export default AddOutcome;
