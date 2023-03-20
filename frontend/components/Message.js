import React from 'react'
import { setMessage } from '../state/action-creators'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import infoMessage, { initialMessageState }  from '../state/reducer'
import { useReducer } from 'react'
import { SET_INFO_MESSAGE } from '../state/action-types'
import reducer from '../state/reducer'
 function Message(props) {
  const [state, dispatch] = useReducer(reducer, initialMessageState)
console.log(props)
console.log(props.message)
  return <div id="message">{props.message}</div> }

  const mapStateToProps = (state) =>{
    return {
    message: state.infoMessage.message
    }
  }

export default connect(mapStateToProps, {})(Message)
