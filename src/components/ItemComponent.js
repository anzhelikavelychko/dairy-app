import React from "react";

const ItemComponent = ({ item, updateSelectedItem, handleClearButton }) => {

  return (
    <li key={item.id} onClick={() => updateSelectedItem(item)}>
      {item.itemValue}
      <button onClick={() => handleClearButton(item.id)}>X</button>
    </li>
  );
};

export default ItemComponent;
