import { useState, useEffect } from "react";
import Inputs from "./Inputs";
import UnorderedList from "./UnorderedList";

const SingleColumn = ({
  columnName,
  nameInputPlaceholder,
  sumName,
  listName,
  handleListChange,
  sendSumValues,
}) => {

  const [incomesSum, setIncomesSum] = useState(0);
  const [expensesSum, setExpensesSum] = useState(0);

  const reducedValues = listName.reduce((acc, item) => {
    return acc + Number(item.value);
  }, 0);

  const createItem = (nameFromInput, amountFromInput) => {
    if (
      nameFromInput === "" ||
      amountFromInput === "" ||
      amountFromInput <= 0
    ) {
      alert("Wprowadź poprawne dane");
    } else {
      const newItem = {
        name: nameFromInput,
        value: amountFromInput,
        id: Date.now(),
      };

      handleListChange([...listName, newItem]);
    }
  };

  useEffect(() => {
    columnName === "Przychody" ? setIncomesSum(reducedValues) : setExpensesSum(reducedValues);
    sendSumValues(incomesSum, expensesSum)
    console.log(incomesSum, expensesSum)
}, [listName]);

  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputPlaceholder={nameInputPlaceholder}
        handleAddClick={createItem}
        addButtonValue="Dodaj"
        nameInputSize={"col-11 col-lg-6"}
      />
      <UnorderedList listName={listName} handleListChange={handleListChange} />
      <p className="align-text-bottom mt-5 bottomText sums">
        Suma {sumName}: <span className="sum fw-bold">{(sumName === "przychodów") ? incomesSum : expensesSum}</span>
        <span className="fw-bold"> zł</span>
      </p>
    </div>
  );
};

export default SingleColumn;
