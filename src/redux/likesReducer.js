import {DECREMENT, INCREMENT} from "./actionTypes";

const initialState = {
  likes: 0
}

export const likesReducer = (state = initialState, action) => {
  console.log('likesReducer', action)

  switch (action.type){

    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1
      }

    case DECREMENT:
      return {
        ...state,
        likes: state.likes > 0 ? state.likes - 1 : state.likes
      }

    default:
      return state
  }
}