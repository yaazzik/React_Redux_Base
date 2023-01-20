import {COMMENT_CREATE} from "../actionTypes";

const badWords = ['ass', 'kanye']

export function spamFilter(store) {
  return function(next) {
    return function (action){
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(res => action.data.text.includes(res))
      }
      return next(action)
    }
  }
}