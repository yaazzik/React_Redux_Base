import {COMMENT_CREATE} from "./actionTypes";


const initialState = {
  comments: []
}

export const commentsReducer = (state = initialState, action) => {
  console.log('inputReducer -> ', action)

  switch (action.type){

    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data]
      }

    default:
      return state
  }
}