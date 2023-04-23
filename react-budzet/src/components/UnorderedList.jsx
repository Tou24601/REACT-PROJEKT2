import { useState } from "react";
import ListItem from "./ListItem";

const UnorderedList = ({ listName, setListName }) => {
 // const [newName, setNewName] = useState("");
 // const [newValue, setNewValue] = useState("");
 // const [newId, setNewId] = useState("");


/*  const newArray = listName.map((item) => {
    setNewName(item.name);
    setNewValue(item.value);
    setNewId(item.id)
  })*/

  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem key={item.id} name={item.name} amount={item.value} idValue={item.id} setListName={setListName} listName={listName} /*inputsStyle={inputsStyling} handleEditClick={editListItem} handleDeleteClick={() => deleteListItem(item.id)} handleAddClick={closeEditing} /* handleAddClick={closeEditing}  /*addButtonValue="Zapisz"  handleCloseEditing={closeEditing} handleDeleteClick={() => deleteListItem()} handleNameInputChange={(e) => setNameInputValue(e.target.value)} handleAmountInputChange={(e) => setAmountInputValue(e.target.value)} */ />
      ))}
    </ul>
  );
};


export default UnorderedList;