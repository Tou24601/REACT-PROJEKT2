import { useState,  useEffect } from "react";
import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({
  name,
  amount,
  idValue,
  setListName,
  listName /*setNewName, setNewValue */,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    display: isEditable ? "" : "none",
    backgroundColor: "white",
    zIndex: "1",
    //w wersji responsywnej tak, żeby przykrywał oryginalny listItem - i nie przykrywał niczego więcej
  };

  const editListItem = () => {
    setIsEditable(!isEditable);
  };
  const editableList = listName;

  const saveEditedList = (editedName, editedValue) => {
    console.log(editedName, editedValue);
    if (editedName === "" || editedValue === "" || editedValue <= 0) {
      alert("Wprowadź poprawne dane");
    } else {
     /* //    setNewName(editedName)
      //  setNewValue(editedValue)

      // name = editedName
      //amount = editedValue
      setListName()*/
      const foundItem = editableList.find((item) => item.id === idValue);
      foundItem.name = editedName;
      foundItem.value = editedValue;
      setIsEditable(!isEditable);
      //nie wyświetla bez nowego renderu
    }
    setListName(editableList)
    console.log(listName)
  };

  const deleteListItem = () => {
    const shortenedList = listName.filter((item) => {
      return item.id !== idValue;
    });
    setListName(shortenedList);
  };

  return (
    <li>
      <div className="mt-4 row" style={{ position: "relative" }}>
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
      />
    </li>
  );
};

export default ListItem;
