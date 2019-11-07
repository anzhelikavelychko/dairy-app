import React from "react";
import InputComponent from "./InputComponent";
import ItemsListComponent from "./ItemsListComponent";

export default class App extends React.Component {
  state = { items: [] };

  updateItems = items => {
    this.setState({ items: items });
  };
  updateStatus = status => {
    this.setState({ status: status });
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
