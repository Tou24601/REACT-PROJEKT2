import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({ name, amount, inputsStyle, handleAddClick, handleEditClick, handleDeleteClick }) => {

  return (
    <li className="mt-4 row">
      <span className="fs-5 col-6">{`${name}: ${amount} zł`}</span>
      <Button
        className="col-3"
        buttonValue="Edytuj"
        handleClick={handleEditClick}
      />
      <Button
        className="col-3"
        buttonValue="Usuń"
        handleClick={handleDeleteClick}
      />
      <Inputs inputsStyle={inputsStyle} addButtonValue="Zapisz" handleAddClick={handleAddClick} name={name} amount={amount} />
    </li>
  );
};

export default ListItem;
