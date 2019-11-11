import React from "react";
import styles from "../App.module.css";

export default class InputComponent extends React.Component {
  state = { inputValue: "" };

  handleOnChangeEvent = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSavingOfItem = event => {
    event.preventDefault();
    const existedItems = localStorage.getItem("items");
    let newItems = [];

    if (existedItems) {
      this.props.updateItems(JSON.parse(existedItems));
      newItems = [
        ...this.props.items,
        {
          id: Math.random(),
          itemValue: this.state.inputValue,
          comments: []
        }
      ];
      localStorage.setItem("items", JSON.stringify(newItems));
    } else {
      newItems = [
        ...this.props.items,
        {
          id: Math.random(),
          itemValue: this.state.inputValue,
          comments: [],
        }
      ];
      localStorage.setItem("items", JSON.stringify(newItems));
    }

    this.props.updateItems(newItems);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className={styles.inputField}>
        <form
          style={{ display: "flex", width: "100%" }}
          onSubmit={this.handleSavingOfItem}
        >
          <input
            style={{ width: "100%", padding: "7px" }}
            type="text"
            placeholder="Type your text..."
            value={this.state.inputValue}
            onChange={this.handleOnChangeEvent}
          />
        </form>
        <button className={styles.addButton} onClick={this.handleSavingOfItem}>
          Add new
        </button>
      </div>
    );
  }
}
