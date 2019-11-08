import React from "react";

export default class InputComponent extends React.Component {
  state = { inputValue: "" };

  handleChange = event => {
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
          comments: []
        }
      ];
      localStorage.setItem("items", JSON.stringify(newItems));
    }

    this.props.updateItems(newItems);
    this.setState({ inputValue: "" });
  };

  render() {
    return (
      <div className="inputField">
        <form
          style={{ display: "flex", width: "80%" }}
          onSubmit={this.handleSavingOfItem}
        >
          <input
            style={{ width: "100%" }}
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.handleSavingOfItem}>Add new</button>
      </div>
    );
  }
}
