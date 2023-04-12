import { useState } from "react";
import Button from "./Button";

const Inputs = ({
  nameInputId,
  nameInputPlaceholder,
  nameInputValue,
  handleNameInputChange,
  amountInputId,
  amountInputPlaceholder,
  amountInputValue,
  handleAmountInputChange,
  buttonId,
  handleClick
}) => {

  return (
    <div className="row">
      <div className="col-12 col-lg-6">
        <input
          className="form-control form-control-lg"
          id={nameInputId}
          type="text"
          placeholder={nameInputPlaceholder}
          onChange={handleNameInputChange/*e => setNameInputValue(e.target.value)*/}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control form-control-lg mt-2 mt-lg-0"
          id={amountInputId}
          type="number"
          placeholder={amountInputPlaceholder}
          onChange={handleAmountInputChange/*e => setAmountInputValue(e.target.value)*/}
        />
      </div>
      <div className="col-2">
        <Button buttonId={buttonId} buttonValue="Dodaj" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Inputs;
