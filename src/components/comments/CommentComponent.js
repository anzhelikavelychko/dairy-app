import React from "react";
import styles from "./Comments.module.css";

const CommentComponent = ({
  commentValue,
  handleOnChangeEvent,
  handleSavingOfComment
}) => {
  return (
    <div className={styles.commentsContainer} style={{ flexDirection: "row" }}>
      <div
        className={styles.colorOfBlock}
        style={{ background: "lightgrey" }}
      ></div>
      <div className={styles.commentsContainer}>
        <input
          value={commentValue}
          type="text"
          placeholder="Type comment here..."
          onChange={handleOnChangeEvent}
          onKeyPress={e => {
            if (e.ctrlKey && e.key === "Enter") {
              handleSavingOfComment(commentValue);
            }
          }}
        />
        <div style={{ display: "flex", color: "lightgray" }}>
          To add new comment click CTRL+Enter
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
