import ListItem from "./ListItem";

const UnorderedList = ({ listName, handleListChange }) => {
  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          amount={item.value}
          idValue={item.id}
          listName={listName}
          handleListChange={handleListChange}
        />
      ))}
    </ul>
  );
};

export default UnorderedList;
