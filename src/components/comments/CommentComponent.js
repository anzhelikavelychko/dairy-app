import React from "react";
import styles from './Comments.module.css';


const CommentComponent = ({
  commentValue,
  handleOnChangeEvent,
  handleSavingOfComment
}) => {

  return (
    <div className={styles.commentsContainer}>
      <input
        value={commentValue}
        type="text"
        placeholder="Type your comment..."
        onChange={handleOnChangeEvent}
        onKeyPress={e => {
          if (e.ctrlKey && e.key === "Enter") {
            handleSavingOfComment(commentValue);
          }
        }}
      />
      <div style={{ display: "flex", color: "lightgray" }}>To add new comment click CTRL+Enter</div>
    </div>
  );
};

export default CommentComponent;
