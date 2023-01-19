import { INPUT_TEXT} from "./actionTypes";

const initialState = {
  text: ''
}

export const inputReducer = (state = initialState, action) => {
  console.log('inputReducer -> ', action)

  switch (action.type){

    case INPUT_TEXT:
      return {
        ...state,
        text: action.text
      }

    default:
      return state
  }
}