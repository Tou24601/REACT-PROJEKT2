import {useState} from "react";
import Inputs from "./Inputs";
import UnorderedList from "./UnorderedList";

const SingleColumn = ({
  columnName,
  nameInputPlaceholder,
  amountInputPlaceholder,
  sumName,
 // name,
  //amount,
  listName,
  setListName
}) => {

 // const [incomeList, setIncomeList] = useState([]);
//  const [expensesList, setExpensesList] = useState([]);

  const [sumAmount, setSumAmount] = useState(0);

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

      setListName([...listName, newItem])

      console.log(listName)

    }
  };

  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        nameInputPlaceholder={nameInputPlaceholder}
        amountInputPlaceholder={amountInputPlaceholder}
        handleAddClick={createItem}
        //name={name}
        //amount={amount}
        addButtonValue="Dodaj"

      />
      <UnorderedList listName={listName} setListName={setListName} />
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