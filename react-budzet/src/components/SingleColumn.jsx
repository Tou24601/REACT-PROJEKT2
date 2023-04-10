import {useState} from "react";
import Inputs from "./Inputs";

const SingleColumn = ({
  columnName,
  nameInputId,
  nameInputPlaceholder,
  nameInputValue,
  numberInputId,
  numberInputPlaceholder,
  amountInputValue,
  sumName,
  sumId,
  buttonId,
  listName,
  unorderedListId
}) => {
  let incomeList = [];
  let expensesList = [];

  const addItem = (listName) => {
    if (
      {nameInputValue} === "" ||
      {amountInputValue} === "" ||
      {amountInputValue} <= 0
    ) {
      alert("Wprowadź poprawne dane");
    } else {
      const newItem = {
        name: {nameInputValue},
        value: {amountInputValue},
        id: Date.now(),
      };
      listName.push(newItem);
      nameInputValue = "";
      amountInputValue = "";
    }
  };

  const [sumAmount, setSumAmount] = useState(0);
  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputId={nameInputId}
        nameInputPlaceholder={nameInputPlaceholder}
        numberInputId={numberInputId}
        numberInputPlaceholder={numberInputPlaceholder}
        handleClick={addItem({listName})}
        buttonId={buttonId}
      />
      <ul className="mt-4" id={unorderedListId}></ul>
      <p className="align-text-bottom mt-5 bottomText sums">
        Suma {sumName}:{" "}
        <span className="sum fw-bold" id={sumId}>
          {sumAmount}
        </span>
        <span className="fw-bold"> zł</span>
      </p>
    </div>
  );
};

export default SingleColumn;
