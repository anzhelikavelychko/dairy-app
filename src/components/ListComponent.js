import React from "react";
import ItemComponent from "./ItemComponent";

const ListComponent = ({
  items,
  selectedItem,
  updateItems,
  updateSelectedItem
}) => {
  const handleDeleteButton = id => {
    const filteredItems = items.filter(item => item.id !== id);

    if (selectedItem.id === id) {
      updateSelectedItem(filteredItems[0]);
    }
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
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </ul>
  );
};

export default ListComponent;
