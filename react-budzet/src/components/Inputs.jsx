import { useState } from "react";
import Button from "./Button";

const Inputs = ({
  nameInputPlaceholder,
  handleNameInputChange,
  handleAmountInputChange,
  handleClick,
}) => {

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder={nameInputPlaceholder}
          onChange={handleNameInputChange/*e => setNameInputValue(e.target.value)*/}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control form-control-lg mt-2 mt-lg-0"
          type="number"
          placeholder="Kwota"
          onChange={handleAmountInputChange/*e => setAmountInputValue(e.target.value)*/}
        />
      </div>
      <div className="col-2">
        <Button buttonValue="Dodaj" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Inputs;
