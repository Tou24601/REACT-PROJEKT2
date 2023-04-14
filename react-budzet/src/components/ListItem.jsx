import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({ name, amount}) => {
  const editListItem = () => {
    return <Inputs />
  }
  const deleteListItem = () => {
    console.log()
  }

  return (
    <li className="mt-4 row">
      <span className="fs-5 col-6">{`${name}: ${amount} zł`}</span>
      <Button className="col-3" buttonValue="Edytuj" handleClick={() => editListItem()} />
      <Button className="col-3" buttonValue="Usuń" handleClick={() => deleteListItem()} />
    </li>
  );
};

export default ListItem;
