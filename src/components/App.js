import React from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";
import CommentsComponent from "./CommentsComponent";

export default class App extends React.Component {
  state = { items: [], selectedItem: null };

  componentDidMount() {
    let existedItems = localStorage.getItem("items");
    if (existedItems) {
      this.setState({ items: JSON.parse(existedItems) });
    }
  }

  updateItems = items => {
    this.setState({ items: items });
  };

  updateSelectedItem = item => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="todos">
        <InputComponent
          items={this.state.items}
          updateItems={this.updateItems}
        />
        <ListComponent
          items={this.state.items}
          updateItems={this.updateItems}
          updateSelectedItem={this.updateSelectedItem}
        />
        {this.state.selectedItem && <CommentsComponent selectedItem={this.state.selectedItem} />}
      </div>
    );
  }
}
