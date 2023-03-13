import React from 'react'
import { setMessage } from '../state/action-creators'
import {Form} from './Form'
export default function Message(props) {
  const {mess} = props
  return <div id="message">{mess}</div>
}
