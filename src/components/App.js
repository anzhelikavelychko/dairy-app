import React from "react";
import InputComponent from "./InputComponent";
import ListComponent from "./itemsList/ListComponent";
import CommentsList from "./comments/CommentsList";
import styles from "./App.module.css";

export default class App extends React.Component {
  state = { items: [], selectedItem: null, commentsList: [] };

  componentDidMount() {
    const existedItems = JSON.parse(localStorage.getItem("items"));

    if (existedItems) {
      this.setState(
        {
          items: existedItems
        },
        () => this.updateSelectedItem(existedItems[0])
      );
    }
  }

  updateItems = items => {
    this.setState({ items: items });
  };

  updateSelectedItem = selectedItem => {
    const { items } = this.state;
    const { comments } = selectedItem;

    const newItems = items.map(item => {
      if (item.id === selectedItem.id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      return item;
    });

    this.setState({
      items: newItems,
      selectedItem: selectedItem,
      commentsList: comments
    });
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  updateCommentsList = commentsList => {
    this.setState({ commentsList: commentsList });
  };

  updateCommentsOfSelectedItem = newCommentsList => {
    const { selectedItem, items } = this.state;

    const newItems = items.map(item => {
      if (item.id === selectedItem.id) {
        item.comments = newCommentsList;
      }
      return item;
    });

    this.setState({ items: newItems });
    localStorage.setItem("items", JSON.stringify(newItems));
  };

  render() {
    const { items, selectedItem, commentsList } = this.state;
    return (
      <div className={styles.mainContainer}>
        <div className={styles.logoContainer}>
          <p>Dairy App</p>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.headerOfContent}>Items</div>
          <div className={styles.listContainer}>
            <InputComponent items={items} updateItems={this.updateItems} />
            <ListComponent
              items={items}
              selectedItem={selectedItem}
              updateItems={this.updateItems}
              updateSelectedItem={this.updateSelectedItem}
            />
          </div>
        </div>
        {this.state.selectedItem && (
          <CommentsList
            commentsList={commentsList}
            selectedItem={selectedItem}
            updateCommentsList={this.updateCommentsList}
            updateCommentsOfSelectedItem={this.updateCommentsOfSelectedItem}
          />
        )}
      </div>
    );
  }
}
