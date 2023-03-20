import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, SET_INFO_MESSAGE } from './action-types'

export const initialWheelState =  0
function Wheelie(state = initialWheelState, action) {
console.log(action.type)
console.log(action.payload)
  if (action.type == 'MOVE_CLOCKWISE'){
    return ({
  ...state,
   index: action.payload
    })
  }
    else {
      return state
    }
  }


export const initialQuizState = ''
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

export const initialMessageState = {message: ''}
      
export const infoMessage = (state = initialMessageState, action) => {
  console.log(action.payload)
  console.log((action.type))
  console.log(state)
  if (action.type == 'SET_INFO_MESSAGE'){
  return ({
...state,
 message: action.payload
  })
}
  else {
    return state
  }
}
  const initialFormState = {
    newQuestion: '',
    newTrueAnswer: '',
    newFalseAnswer: '',
  }
  function form(state = initialFormState, action) {
    return state}

  
  export default combineReducers({ Wheelie, quiz, selectedAnswer, infoMessage, form })
  
