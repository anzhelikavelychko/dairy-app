import React from "react";

const ItemComponent = ({ item, updateSelectedItem, handleDeleteButton }) => {
  return (
    <div>
      <li key={item.id} onClick={() => updateSelectedItem(item)}>
        {item.itemValue}
      </li>
      <button onClick={() => handleDeleteButton(item.id)}>Delete</button>
    </div>
  );
};

export default ItemComponent;
