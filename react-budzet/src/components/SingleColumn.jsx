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
  sumValue,
}) => {
  const [newList, setNewList] = useState(listName);

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
      setNewList([...listName, newItem]);
    }
  };

  const reducedList = newList.reduce((acc, item) => {
    return acc + Number(item.value);
  }, 0);

  useEffect(() => {
    handleListChange(newList);
    sendSumValues(reducedList);
  }, [newList]);

  const handleUpdateList = (list) => {
    setNewList(list);
  };

  return (
    <div className="col-12 col-xl-6 border income text-start pb-5 tableHolder">
      <p className="text-uppercase fw-bold fs-4 m-2">{columnName}</p>
      <Inputs
        inputsClass="row"
        nameInputClass="col-12 col-lg-6"
        nameInputPlaceholder={nameInputPlaceholder}
        handleAddClick={createItem}
        addButtonValue="Dodaj"
        nameInputSize={"col-11 col-lg-6"}
      />
      <UnorderedList listName={listName} handleListChange={handleUpdateList} />
      <p className="align-text-bottom mt-5 bottomText sums">
        Suma {sumName}: <span className="sum fw-bold">{sumValue}</span>
        <span className="fw-bold"> zł</span>
      </p>
    </div>
  );
};

export default SingleColumn;
