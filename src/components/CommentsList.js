import React, { useState } from "react";
import CommentComponent from "./CommentComponent";

const CommentsList = ({ commentsList,  updateCommentsList, updateCommentsOfSelectedItem }) => {

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
      <div>
        <ul className="listItems">{listOfComments}</ul>
        <CommentComponent
          commentValue={commentValue}
          handleOnChangeEvent={handleOnChangeEvent}
          handleSavingOfComment={handleSavingOfComment}
        />
      </div>
    );
  }
};

export default CommentsList;
