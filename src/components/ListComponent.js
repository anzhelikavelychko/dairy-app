import React from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = ({ items, updateItems, updateSelectedItem }) => {
  const handleClearButton = id => {
    const filteredItems = items.filter(item => item.id !== id);

    localStorage.setItem("items", JSON.stringify(filteredItems));
    updateItems(filteredItems);
  };
  return (
    <ul className="listItems">
      {items.map(item => (
        <ItemComponent
          key={item.id}
          item={item}
          updateItems={updateItems}
          updateSelectedItem={updateSelectedItem}
          handleClearButton={handleClearButton}
        />
      ))}
    </ul>
  );
};

export default ListComponent;
