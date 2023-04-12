import {useState} from "react";
import Inputs from "./Inputs";

const SingleColumn = ({
  columnName,
  nameInputId,
  nameInputPlaceholder,
  nameInputValue,
  handleNameInputChange,
  amountInputId,
  amountInputPlaceholder,
  amountInputValue,
  handleAmountInputChange,
  sumName,
  sumId,
  buttonId,
  handleClick,
  listName,
  unorderedListId
}) => {

  const [sumAmount, setSumAmount] = useState(0);
  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputId={nameInputId}
        nameInputPlaceholder={nameInputPlaceholder}
        nameInputValue={nameInputValue}
        handleNameInputChange={handleNameInputChange}
        amountInputId={amountInputId}
        amountInputPlaceholder={amountInputPlaceholder}
        amountInputValue={amountInputValue}
        handleAmountInputChange={handleAmountInputChange}
        buttonId={buttonId}
        handleClick={handleClick}
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
