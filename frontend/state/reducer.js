import { combineReducers } from 'redux'
import { SET_INFO_MESSAGE } from './action-types'

const initialWheelState = {
  wheelie: 0}
function wheel(state = initialWheelState, action) {
  return state
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

  
  export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
  
