import { useState } from "react";
import ListItem from "./ListItem";

const UnorderedList = ({ listName }) => {
  
  //const [nameInputValue, setNameInputValue] = useState("");
  //const [amountInputValue, setAmountInputValue] = useState("");


 const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    with: "",
    display: isEditable ? "" : "none",
    backgroundColor: "white"
  };

  const editListItem = (editableName, editableAmount) => {
   // setNameInputValue(editableName);
   // console.log(nameInputValue);
    //setAmountInputValue(editableAmount);
    setIsEditable(!isEditable);
  };
  const deleteListItem = (index) => {
    console.log("I co teraz?");

    //listName
    //filtrowanie po id > usuń listItem z odpowiedniej listy
  };

  const closeEditing = (newName, newValue) => {
    if (
      newName === "" ||
      newValue === "" ||
      newValue <= 0
    ) {
      alert("Wprowadź poprawne dane");
    } else {
      //filtrowanie po id > zmień listItem w odpowiedniej liście
      setIsEditable(!isEditable);
    }
  };
  
  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem key={item.id} name={item.name} amount={item.value} inputsStyle={inputsStyling} handleEditClick={() => editListItem(item.name, item.value)} handleDeleteClick={() => deleteListItem(item.id)} /* handleAddClick={closeEditing}  /*addButtonValue="Zapisz"  handleCloseEditing={closeEditing} handleDeleteClick={() => deleteListItem()} handleNameInputChange={(e) => setNameInputValue(e.target.value)} handleAmountInputChange={(e) => setAmountInputValue(e.target.value)} */ />
      ))}
    </ul>
  );
};


export default UnorderedList;