import React, { useState } from "react";
import CommentComponent from "./CommentComponent";
import styles from "./Comments.module.css";

const CommentsList = ({
  commentsList,
  selectedItem,
  updateCommentsList,
  updateCommentsOfSelectedItem
}) => {
  const [commentValue, setCommentValue] = useState("");

  const handleOnChangeEvent = event => {
    setCommentValue(event.target.value);
  };

  const handleSavingOfComment = value => {
    const newCommentsList = [
      ...commentsList,
      {
        text: value
      }
    ];

    updateCommentsOfSelectedItem(newCommentsList);
    updateCommentsList(newCommentsList);
    setCommentValue("");
  };

  if (!commentsList) {
    return (
      <CommentComponent
        commentValue={commentValue}
        handleOnChangeEvent={handleOnChangeEvent}
        handleSavingOfComment={handleSavingOfComment}
      />
    );
  } else {
    const listOfComments = commentsList.map((comment, index) => {
      return <li key={index}>{comment.text}</li>;
    });
    return (
      <div className={styles.contentContainer}>
        <div style={{ display: "flex", marginTop: "15px", marginLeft: "15px" }}>
          Comments #{selectedItem.itemValue}
        </div>
        <div className={styles.commentsListContainer}>
          <ul className={styles.commentsContainer}>{listOfComments}</ul>
          <CommentComponent
            commentValue={commentValue}
            handleOnChangeEvent={handleOnChangeEvent}
            handleSavingOfComment={handleSavingOfComment}
          />
        </div>
      </div>
    );
  }
};

export default CommentsList;
