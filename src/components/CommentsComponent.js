import React from "react";

const CommentsComponent = ({ selectedItem }) => {
  const { comments } = selectedItem;
  console.log("comments", selectedItem, comments);

  if (!comments.length) {
    return <div>To add new comment click CTRL+Enter</div>;
  } else {
    const listOfComments = comments.map((comment, index) => {
      return <li key={index}>{comment.text}</li>;
    });
    return <ul className="listItems">{listOfComments}</ul>;
  }
};

export default CommentsComponent;
