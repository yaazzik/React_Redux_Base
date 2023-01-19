import React, {useState} from 'react';
import SingleComment from "./SingleComment";
import {useDispatch, useSelector} from "react-redux";
import uniqid from "uniqid";
import {commentCreate} from "./redux/actions";

const Comments = (props) => {

 // console.log('comment props -> ', props)

  const [textComment, setTextComment] = useState('');
  const dispatch = useDispatch();

  const comments = useSelector(state => {
    const {commentsReducer} = state;
    return commentsReducer.comments;
  })
  console.log('comments -> ', comments)

  const handleInput = (e) => {
    setTextComment(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit -> ', textComment)
    const id = uniqid();
    dispatch(commentCreate(textComment, id))
  }

  return (
    <div className='card-comments'>
      <form className='comments-item-create' onSubmit={handleSubmit}>
        <input type='text' onChange={handleInput} value={textComment}/>
        <input type='submit' hidden />
      </form>
      {!!comments.length && comments.map((comment) => {
        return <SingleComment key={comment.id} data={comment} />
      })}
    </div>
  );
};

export default Comments;
