import Inputs from "./Inputs";
import Button from "./Button";

const ListItem = () => {
  return <li className="mt-4">
    <span className="fs-5" >{"`${element.name}: ${element.value} zł`"}</span>
    <Button buttonValue="Edytuj" />
    <Button buttonValue="Usuń" buttonId="element.id" />
    <Inputs />
  </li>;
};

export default ListItem;
