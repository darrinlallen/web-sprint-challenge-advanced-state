import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
let t= true
let q = true
let f = true
let go = true
export function Form(props) {
  const {state} = props 
   const [disabled, setdisabled] = useState(true)
const[newQuestion, setnewQuestion] = useState('')
const [newTrueAnswer, setnewTrueAnswer] = useState('')
const [newFalseAnswer, setnewFalseAnswer] = useState('')
let q = true
let t= ''
let f =''
function handleq(e) {
   setnewQuestion(e.target.value)
  console.log(disabled)
  

  }
  function handlet(e) {
    setnewTrueAnswer(e.target.value)
    console.log(disabled)
    

  
    }
    function handlef(e) {
      setnewFalseAnswer(e.target.value)
      if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0  ){
        setdisabled(false) 
        q = "false"
      }
        
        }  
  function onSubmit (evt)  {

  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={handleq} id="newQuestion" placeholder="Enter question"/>
      <input maxLength={50} onChange={handlet} id="newTrueAnswer" placeholder="Enter true answer"  />
      <input maxLength={50} onChange={handlef} id="newFalseAnswer" placeholder="Enter false answer"  />
      <button disabled = {q} id="submitNewQuizBtn" >Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
