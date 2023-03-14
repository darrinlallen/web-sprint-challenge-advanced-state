import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'
import setMessage from './Message'
import { useReducer } from 'react'
import reducer from '../state/reducer'
let t= true
let q = true
let f = true
let go = true
export function Form(props) {
   const [disabled, setdisabled] = useState(true)
const[newQuestion, setnewQuestion] = useState('')
const [newTrueAnswer, setnewTrueAnswer] = useState('')
const [newFalseAnswer, setnewFalseAnswer] = useState('')
const [state, dispatch] = useReducer(reducer)
let q = true
let t= ''
let f =''
let neworder =''
function handleq(e) {
   setnewQuestion(e.target.value)
  console.log(disabled)
  if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0  ){
    setdisabled(false) 
    q = false
  }

  }
  function handlet(e) {
    setnewTrueAnswer(e.target.value)
    console.log(disabled)
    if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0  ){
      setdisabled(false) 
      q = false
    }

  
    }
    function handlef(e) {
      setnewFalseAnswer(e.target.value)
      if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0  ){
        setdisabled(false) 
        q = false
      }
        
        }  
  function onSubmit (evt)  {
    evt.preventDefault();
    neworder = {"question_text": newQuestion, "true_answer_text":newTrueAnswer, "false_answer_text": newFalseAnswer   }
    axios.post('http://localhost:9000/api/quiz/new', neworder)   
    .then(res => {
    
    
  })
    .catch(err => {
      
    })
  setnewQuestion('')
  setnewFalseAnswer('')
  setnewTrueAnswer('')
dispatch(setMessage(`Congrats: "${newQuestion}" is a great question!`)) 
  }
  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={handleq} id="newQuestion" placeholder="Enter question" value={newQuestion}/>
      <input maxLength={50} onChange={handlet} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange ={handlef} id="newFalseAnswer" placeholder="Enter false answer"  value={newFalseAnswer}/>
      <button onSubmit={onSubmit} disabled = {disabled} id="submitNewQuizBtn" >Submit new quiz</button>
    </form>
  )
}

export default connect(state => state, actionCreators)(Form)
