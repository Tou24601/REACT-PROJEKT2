import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = ({name, amount}) => {
  return <li className="mt-4">
    <span className="fs-5" >{`${name}: ${amount} zł`}</span>
    <Button buttonValue="Edytuj" />
    <Button buttonValue="Usuń" />
    <Inputs />
  </li>;
};

export default ListItem;
