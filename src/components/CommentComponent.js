import React from "react";
import { Input } from "semantic-ui-react";

const CommentComponent = ({
  commentValue,
  handleOnChangeEvent,
  handleSavingOfComment
}) => {

  return (
    <div>
      <Input
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
      <div>To add new comment click CTRL+Enter</div>
    </div>
  );
};

export default CommentComponent;
