import ListItem from "./ListItem";

const UnorderedList = ({ listName }) => {
  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem key={item.id} name={item.name} amount={item.value} />
      ))}
    </ul>
  );
};

export default UnorderedList;
