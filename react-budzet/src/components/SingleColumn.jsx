import {useState} from "react";
import Inputs from "./Inputs";
import UnorderedList from "./UnorderedList";

const SingleColumn = ({
  columnName,
  nameInputPlaceholder,
  handleNameInputChange,
  handleAmountInputChange,
  sumName,
  handleClick,
  name,
  amount,
  listName
}) => {

  const [sumAmount, setSumAmount] = useState(0);
  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputPlaceholder={nameInputPlaceholder}
        handleNameInputChange={handleNameInputChange}
        handleAmountInputChange={handleAmountInputChange}
        handleClick={handleClick}
        name={name}
        amount={amount}

      />
      <UnorderedList listName={listName} />
      <p className="align-text-bottom mt-5 bottomText sums">
        Suma {sumName}:{" "}
        <span className="sum fw-bold">
          {sumAmount}
        </span>
        <span className="fw-bold"> zł</span>
      </p>
    </div>
  );
};

export default SingleColumn;
