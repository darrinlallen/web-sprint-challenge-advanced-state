
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, RESET_FORM, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"

// ❗ You don't need to add extra action creators to achieve MVP
export function moveClockwise(pos) {
  return{
 
  type: MOVE_CLOCKWISE,
  payload: pos
  }
}

export function moveCounterClockwise(pos) {return {
  type: MOVE_COUNTERCLOCKWISE,
  payload: pos
} }

export function selectAnswer() {return{
  type: SET_SELECTED_ANSWER
} }

export function setMessage(mess) {
  return {
  type: SET_INFO_MESSAGE,
  payload: mess

} }

export function setQuiz() {return {
  type: SET_QUIZ_INTO_STATE
} }

export function inputChange(question1, question2, question3) {return{
  type: INPUT_CHANGE,
  payload1: question1,
  payload2: question2,
  payload3: question3
} }

export function resetForm() {return{
  type: RESET_FORM
} }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}