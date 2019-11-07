import React from "react";

const ListComponent = ({ items, updateItems }) => {
  const handleClearButton = index => {
    items.splice(index, 1);
    updateItems(items);
  };

  const listItems = items.map((item, index) => {
    return (
      <li key={index}>
        {item.text}
        <button onClick={() => handleClearButton(index)}>X</button>
      </li>
    );
  });
  return <ul className="listItems">{listItems}</ul>;
};

export default ListComponent;
