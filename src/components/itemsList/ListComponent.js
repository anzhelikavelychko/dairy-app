import React from "react";
import ItemComponent from "./ItemComponent";
import styles from "./ItemList.module.css";

const ListComponent = ({
  items,
  selectedItem,
  updateItems,
  updateSelectedItem
}) => {
  const handleDeleteButton = id => {
    const filteredItems = items.filter(item => item.id !== id);

    if (selectedItem && selectedItem.id === id) {
      updateSelectedItem(filteredItems[0]);
    }
    localStorage.setItem("items", JSON.stringify(filteredItems));
    updateItems(filteredItems);
  };
  return (
    <ul className={styles.listItemsContainer}>
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
