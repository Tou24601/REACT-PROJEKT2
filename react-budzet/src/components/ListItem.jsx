import { useState } from "react";
import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({
  name,
  amount,
  idValue,
  setListName,
  listName,
}) => {
  const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    display: isEditable ? "" : "none",
    backgroundColor: "white",
    //w wersji responsywnej tak, żeby przykrywał oryginalny listItem - i nie przykrywał niczego więcej
  };

  const editListItem = () => {
    setIsEditable(!isEditable);
  };

  const saveEditedList = (editedName, editedValue) => {
    console.log(editedName, editedValue);
    if (editedName === "" || editedValue === "" || editedValue <= 0) {
      alert("Wprowadź poprawne dane");
    } else {
      const foundItem = listName.find((item) => item.id === idValue);
      foundItem.name = editedName;
      foundItem.value = editedValue;
      setIsEditable(!isEditable);
      //nie wyświetla bez nowego renderu
    }
  };

  const deleteListItem = () => {
    const shortenedList = listName.filter((item) => {
      return item.id !== idValue;
    });
    setListName(shortenedList);
  };

  return (
    <li className="mt-4 row">
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
