import { useState } from "react";
import Button from "./Button";

const Inputs = ({
  inputsClass,
  nameInputPlaceholder,
  addButtonValue,
  handleAddClick,
  name,
  amount,
  nameInputClass,
}) => {
  const [nameInputValue, setNameInputValue] = useState(name || "");
  const [amountInputValue, setAmountInputValue] = useState(amount || "");

  const clearInputs = () => {
    setNameInputValue("");
    setAmountInputValue("");
  };

  const getValuesFromInputs = () => {
    handleAddClick(nameInputValue, amountInputValue);
    clearInputs();
  };

  return (
    <div className={inputsClass}>
      <div className={nameInputClass}>
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder={nameInputPlaceholder}
          value={nameInputValue}
          onChange={(e) => setNameInputValue(e.target.value)}
        />
      </div>
      <div className="col-4">
        <input
          className="form-control form-control-lg mt-2 mt-lg-0"
          type="number"
          placeholder="Kwota"
          value={amountInputValue}
          onChange={(e) => setAmountInputValue(e.target.value)}
        />
      </div>
      <div className="col-2">
        <Button
          buttonValue={addButtonValue}
          handleClick={getValuesFromInputs}
        />
      </div>
    </div>
  );
};

export default Inputs;
