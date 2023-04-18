import { useState } from "react";
import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({ name, amount, indexValue, setListName /*inputsStyle, handleAddClick, handleEditClick, handleDeleteClick*/ }) => {

  const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    with: "",
    display: isEditable ? "" : "none",
    backgroundColor: "white"
  };

  const editListItem = () => {
    console.log(indexValue)
    setIsEditable(!isEditable);
  };

  const closeEditing = (editedName, editedValue) => {

    console.log(editedName, editedValue)
    if (
      editedName === "" ||
      editedValue === "" ||
      editedValue <= 0
    ) {
      alert("Wprowadź poprawne dane");
    } else {
      const editedList = []
      //const found = listName.find()
     // const editedList = listName.filter()
      //filtrowanie po id > zmień listItem w odpowiedniej liście
      //czy muszę filtrować, czy po prostu zrobić set? a może metodą find? i to samo w delete?
      setListName(editedList);
      setIsEditable(!isEditable);
    }
  };

  const deleteListItem = () => {
    //dlaczego nie przechodziło z propsem key (tylko wołało, że key to nie props)?
    console.log(indexValue)
    console.log("I co teraz?");

    //listName
    //filtrowanie po id > usuń listItem z odpowiedniej listy
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
      <Inputs inputsStyle={inputsStyling} addButtonValue="Zapisz" handleAddClick={closeEditing} name={name} amount={amount} />
    </li>
  );
};

export default ListItem;
