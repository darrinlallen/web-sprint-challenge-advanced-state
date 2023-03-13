// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { SET_INFO_MESSAGE } from './action-types'

const initialWheelState = 0
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

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
        return(
          state
        )
      }
    


const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
