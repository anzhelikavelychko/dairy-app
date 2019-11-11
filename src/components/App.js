import React from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./ListComponent";
import CommentsList from "./CommentsList";

export default class App extends React.Component {
  state = { items: [], selectedItem: null, commentsList: [] };

  componentDidMount() {
    const existedItems = JSON.parse(localStorage.getItem("items"));

    if (existedItems) {
      const { comments } = existedItems[0];
      this.setState({
        items: existedItems,
        selectedItem: existedItems[0],
        commentsList: comments
      });
    }
  }

  updateItems = items => {
    this.setState({ items: items });
  };

  updateSelectedItem = item => {
    const { comments } = item;
    this.setState({ selectedItem: item, commentsList: comments });
  };

  updateCommentsList = commentsList => {
    this.setState({ commentsList: commentsList });
  };

  updateCommentsOfSelectedItem = newCommentsList => {
    const { selectedItem } = this.state;
    const existedItems = JSON.parse(localStorage.getItem("items"));

    const newItems = existedItems.map(item => {
      if (item.id === selectedItem.id) {
        item.comments = newCommentsList;
      }
      return item;
    });

    localStorage.setItem("items", JSON.stringify(newItems));
    this.updateItems(newItems);
  };

  render() {
    const { items, selectedItem, commentsList } = this.state;
    return (
      <div className="todos">
        <InputComponent items={items} updateItems={this.updateItems} />
        <ListComponent
          items={items}
          selectedItem={selectedItem}
          updateItems={this.updateItems}
          updateSelectedItem={this.updateSelectedItem}
        />
        {this.state.selectedItem && (
          <CommentsList
            commentsList={commentsList}
            updateCommentsList={this.updateCommentsList}
            updateCommentsOfSelectedItem={this.updateCommentsOfSelectedItem}
          />
        )}
      </div>
    );
  }
}
