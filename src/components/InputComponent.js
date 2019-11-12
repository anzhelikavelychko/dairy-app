import React from "react";
import styles from "../App.module.css";

export default class InputComponent extends React.Component {
  state = { inputValue: "" };

  handleOnChangeEvent = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSavingOfItem = event => {
    event.preventDefault();
    const { items, updateItems } = this.props;
    const newItems = [
      ...items,
      {
        id: Math.random(),
        itemValue: this.state.inputValue,
        comments: [],
        isSelected: false
      }
    ];

    this.setState({ inputValue: "" });
    updateItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.inputField}>
          <form
            style={{ display: "flex", width: "100%" }}
            onSubmit={this.handleSavingOfItem}
          >
            <input
              style={{ width: "100%", padding: "7px" }}
              type="text"
              placeholder="Type name here.."
              value={this.state.inputValue}
              onChange={this.handleOnChangeEvent}
            />
          </form>
          <button
            className={styles.addButton}
            onClick={this.handleSavingOfItem}
          >
            Add new
          </button>
        </div>
      </div>
    );
  }
}
