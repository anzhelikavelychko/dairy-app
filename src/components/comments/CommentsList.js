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
  const [colorOfBlock, setColorOfBlock] = useState(false);

  let listOfComments = [];

  const handleOnChangeEvent = event => {
    setCommentValue(event.target.value);
  };

  const handleSavingOfComment = value => {
    const newCommentsList = [
      ...commentsList,
      {
        text: value,
        color: colorOfBlock ? "#ff8a00" : "#46568b"
      }
    ];

    updateCommentsOfSelectedItem(newCommentsList);
    updateCommentsList(newCommentsList);
    setCommentValue("");
    setColorOfBlock(!colorOfBlock);
  };

  if (commentsList) {
    listOfComments = commentsList.map((comment, index) => {
      return (
        <li key={index}>
          <div
            className={styles.colorOfBlock}
            style={{ background: comment.color }}
          ></div>
          <div style={{ display: "flex", marginLeft: "10px" }}>
            {comment.text}
          </div>
        </li>
      );
    });
  }
  return (
    <div className={styles.contentContainer}>
      <div className={styles.headerOfContent}>
        Comments #{selectedItem.itemValue}
      </div>
      <div className={styles.commentsListContainer}>
        {commentsList && (
          <ul className={styles.commentsContainer}>{listOfComments}</ul>
        )}
        <CommentComponent
          commentValue={commentValue}
          handleOnChangeEvent={handleOnChangeEvent}
          handleSavingOfComment={handleSavingOfComment}
        />
      </div>
    </div>
  );
};

export default CommentsList;
