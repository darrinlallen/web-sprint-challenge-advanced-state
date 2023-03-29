import { act } from 'react-dom/test-utils'
import { combineReducers } from 'redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, SET_INFO_MESSAGE } from './action-types'

export const initialWheelState =  2
function Wheelie(state = initialWheelState, action) {

  if (action.type == 'MOVE_COUNTER'){
    return ({
  ...state,
      wish: action.payload
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
    newQuestion: 'foo',
    newTrueAnswer: 'bar',
    newFalseAnswer: 'bap'
  }
  function form(state = initialFormState, action) {
    if (action.type == 'INPUT_CHANGE'){
    return ({...state,
  newQuestion: action.payload1,
newTrueAnswer: action.payload2,
newFalseAnswer: action.payload3 })
    }
    else {return state}
    }
  
  export default combineReducers({ Wheelie, quiz, selectedAnswer, infoMessage, form })
  
