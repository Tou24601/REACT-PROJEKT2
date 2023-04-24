import ListItem from "./ListItem";

const UnorderedList = ({ listName, setListName }) => {
  return (
    <ul className="mt-4">
      {listName.map((item) => (
        <ListItem
          key={item.id}
          name={item.name}
          amount={item.value}
          idValue={item.id}
          setListName={setListName}
          listName={listName}
        />
      ))}
    </ul>
  );
};

export default UnorderedList;
