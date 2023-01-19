import React from 'react';

const SingleComment = (props) => {
  return (
    <form className='comments-item'>
      <div className='comments-item-delete'>&times;</div>
      <p>{props.data.text}</p>
    </form>
  );
};

export default SingleComment;
