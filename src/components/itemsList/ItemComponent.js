import React from "react";
import styles from "./ItemList.module.css";

const ItemComponent = ({ item, updateSelectedItem, handleDeleteButton }) => {
  return (
    <div className={item.isSelected ? styles.selectedItem : styles.listItems}>
      <li key={item.id} onClick={() => updateSelectedItem(item)}>
        <span className={styles.pointer} />
        <p className={styles.value}>{item.itemValue}</p>
        <div className={styles.countOfComments}>{item.comments.length}</div>
      </li>
      <button onClick={() => handleDeleteButton(item.id)}>Delete</button>
    </div>
  );
};

export default ItemComponent;
