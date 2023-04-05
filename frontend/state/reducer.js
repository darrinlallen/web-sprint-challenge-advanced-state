import { combineReducers } from 'redux'
import { moveCounterClockwise } from './action-creators'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_INFO_MESSAGE } from './action-types'

export const initialWheelState = {pos :0}
function Wheelthing(state = initialWheelState, action) {

  if (action.type == 'MOVE_CLOCKWISE'){
    return ({
  ...state, 
  pos: action.payload

    })
  }
    else if (action.type == 'MOVE_COUNTERCLOCKWISE'){
      return ({
        ...state,
        pos: action.payload
      
      })
    }
    else {
      return state    }
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
  
  export default combineReducers({ Wheelthing, infoMessage, form })
  