import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "./redux/actions";

const Title = (props) => {
  console.log("title props -> ", props)

  const titleText = useSelector(state => {
    //console.log('title state -> ', state)
    const {inputReducer} = state;
    return inputReducer.text
  })

  const handleChange = (e) => {
    //console.log("handle text -> ", e.target.value)
    dispatch(inputText(e.target.value))
  }

  const dispatch = useDispatch();

  return (
    <div className='card-title'>
      <div className='card-title-top'>
        <input type='text' onChange={handleChange} />
      </div>
      <p>{titleText}</p>
    </div>
  );
};

export default Title;
