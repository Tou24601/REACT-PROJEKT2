import { useState } from "react";
import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({ name, amount, idValue, setListName, listName }) => {
  const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    display: isEditable ? "" : "none",
    backgroundColor: "white",
    zIndex: "1",
    top: "-5px",
    width: "90%",
  };

  const editListItem = () => {
    setIsEditable(!isEditable);
  };

  const saveEditedList = (editedName, editedValue) => {
    console.log(editedName, editedValue);
    if (editedName === "" || editedValue === "" || editedValue <= 0) {
      alert("Wprowadź poprawne dane");
    } else {
      const editableList = [...listName].map((item) => {
        if (item.id === idValue) {
          item.name = editedName;
          item.value = editedValue;
        }
        return item;
      });
      setListName(editableList);
      setIsEditable(!isEditable);
    }
  };

  const deleteListItem = () => {
    const shortenedList = listName.filter((item) => {
      return item.id !== idValue;
    });
    setListName(shortenedList);
  };

  return (
    <li className="mt-4 row" style={{ position: "relative" }}>
      <div className="row">
        <span className="fs-5 col-6">{`${name}: ${amount} zł`}</span>
        <Button
          className="col-3"
          buttonValue="Edytuj"
          handleClick={editListItem}
        />
        <Button
          className="col-3"
          buttonValue="Usuń"
          handleClick={() => deleteListItem()}
        />
      </div>
      <Inputs
        inputsStyle={inputsStyling}
        addButtonValue="Zapisz"
        handleAddClick={saveEditedList}
        name={name}
        amount={amount}
        nameInputSize={"col-6"}
      />
    </li>
  );
};

export default ListItem;
