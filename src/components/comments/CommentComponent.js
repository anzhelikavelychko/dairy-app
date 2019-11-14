import React from "react";
import styles from "./Comments.module.css";

const CommentComponent = ({
  commentValue,
  handleOnChangeEvent,
  handleSavingOfComment
}) => {
  return (
    <div
      className={styles.commentsContainer}
      style={{
        flexDirection: "row",
        height: "15%",
        overflow: "none",
        margin: "0 0.93rem",
        justifyContent: "center"
      }}
    >
      <div
        className={styles.colorOfBlock}
        style={{ background: "lightgrey" }}
      ></div>
      <div className={styles.commentsInput}>
        <textarea
          value={commentValue}
          type="text"
          onChange={handleOnChangeEvent}
          onKeyPress={e => {
            if (e.ctrlKey && e.key === "Enter") {
              handleSavingOfComment(commentValue);
            }
          }}
        />
        <div style={{ display: "flex", color: "lightgray", fontSize: "0.75rem" }}>
          To add new comment click CTRL+Enter
        </div>
      </div>
    </div>
  );
};

export default CommentComponent;
