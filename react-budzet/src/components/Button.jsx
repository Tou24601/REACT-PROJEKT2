import React from "react";
import "../reset.css";
import "../App.css";

const Button = ({idValue, buttonValue}) => {
  return (
    <div className="col-2">
      <button
        type="button"
        className="btn btn-primary mt-2 mt-lg-0 me-4 me-xl-0"
        id={idValue}
      >
        {buttonValue}
      </button>
    </div>
  );
};

export default Button;
