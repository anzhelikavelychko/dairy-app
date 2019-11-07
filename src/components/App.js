import React from "react";
import InputComponent from "./InputComponent";
import ItemsListComponent from "./ItemsListComponent";

export default class App extends React.Component {
  state = { items: [] };

  componentDidMount() {
    let existedItems = localStorage.getItem("items");
    if (existedItems) {
      this.setState({ items: JSON.parse(existedItems) });
    }
  }

  updateItems = items => {
    this.setState({ items: items });
  };

  render() {
    return (
      <div className="todos">
        <InputComponent
          items={this.state.items}
          updateItems={this.updateItems}
        />
        <ItemsListComponent
          items={this.state.items}
          updateItems={this.updateItems}
        />
      </div>
    );
  }
}
