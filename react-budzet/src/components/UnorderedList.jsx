import { useState } from "react";
import ListItem from "./ListItem";

const UnorderedList = ({ listName, setListName }) => {
  
  //const [nameInputValue, setNameInputValue] = useState("");
  //const [amountInputValue, setAmountInputValue] = useState("");


 const [isEditable, setIsEditable] = useState(false);

  const inputsStyling = {
    position: "absolute",
    with: "",
    display: isEditable ? "" : "none",
    backgroundColor: "white"
  };

  const editListItem = () => {
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
      console.log()
      //edytowanie i usuwanie trzeba chyba przenieść do listitem :(
      //const found = listName.find()
     // const editedList = listName.filter()
      //filtrowanie po id > zmień listItem w odpowiedniej liście
      //czy muszę filtrować, czy po prostu zrobić set? a może metodą find? i to samo w delete?
      setIsEditable(!isEditable);
    }
  };

  const deleteListItem = (index) => {
    console.log("I co teraz?");

    //listName
    //filtrowanie po id > usuń listItem z odpowiedniej listy
  };
  
  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem key={item.id} name={item.name} amount={item.value} inputsStyle={inputsStyling} handleEditClick={editListItem} handleDeleteClick={() => deleteListItem(item.id)} handleAddClick={closeEditing} /* handleAddClick={closeEditing}  /*addButtonValue="Zapisz"  handleCloseEditing={closeEditing} handleDeleteClick={() => deleteListItem()} handleNameInputChange={(e) => setNameInputValue(e.target.value)} handleAmountInputChange={(e) => setAmountInputValue(e.target.value)} */ />
      ))}
    </ul>
  );
};


export default UnorderedList;