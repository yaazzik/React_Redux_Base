import {
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  COMMENTS_LOAD,
  DECREMENT,
  INCREMENT,
  INPUT_TEXT, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON
} from "./actionTypes";

export function incrementLikes() {
  return {
    type: INCREMENT
  }
}

export function decrementLikes() {
  return {
    type: DECREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: {id, text}
  }
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: {id, text}
  }
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id
  }
}

export function commentsLoad() {
  return async dispatch => {
    dispatch(loadingDisplayOn())
    const res = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
    const jsonRes = await res.json();
    dispatch({
      type: COMMENTS_LOAD,
      data: jsonRes
    })
    dispatch(loadingDisplayOff())
  }
}

export function loadingDisplayOn() {
  return {
    type: LOADER_DISPLAY_ON,
  }
}

export function loadingDisplayOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  }
}