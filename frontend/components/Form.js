import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'
import { setMessage } from '../state/action-creators'
import Message from './Message'
import {infoMessage, initialMessageState} from '../state/reducer'
import { useReducer } from 'react'
import reducer from '../state/reducer'
import { SET_INFO_MESSAGE } from '../state/action-types'
import App from './App'
let q = ''
let t= ''
let f =''


function Form(props) {

   const [disabled, setdisabled] = useState(true)
const[newQuestion, setnewQuestion] = useState('')
const [newTrueAnswer, setnewTrueAnswer] = useState('')
const [newFalseAnswer, setnewFalseAnswer] = useState('')
const [state, dispatch] = useReducer(reducer)


let neworder =''

function handleq(e) {
  
   setnewQuestion(e.target.value)
   q = newQuestion
  console.log(t)
  if ((q.trim().length>0 && t.trim().length>0) || q == '  question  ' ){
    setdisabled(false) 
    
  }
  else {
    setdisabled(true)

  }



  }
  function handlet(e) {
    setdisabled(true)
    setnewTrueAnswer(e.target.value)
    t= newTrueAnswer
    console.log(t)
    
    if (q.trim().length > 0 && t.trim().length >0 ){
      setdisabled(false) 
      
    }
    else {
      setdisabled(true)
    }
  
  
    }
    function handlef(e) {
    
      setnewFalseAnswer(e.target.value)
    f = newFalseAnswer
    console.log(f)
      if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0  ){
    
        setdisabled(false) 
      }
       
      
      }
        
          
  function onSubmit (evt)  {

    evt.preventDefault();
console.log(props)
    neworder = {"question_text": newQuestion, "true_answer_text":newTrueAnswer, "false_answer_text": newFalseAnswer   }
    axios.post('http://localhost:9000/api/quiz/new', neworder)   
    .then(res => {
  
    
  })
    .catch(err => {
      
    })
  setnewQuestion('')
  setnewFalseAnswer('')
  setnewTrueAnswer('')
  props.setMessage(`Congrats: "${newQuestion}" is a great question!`)
  console.log(props)
setdisabled(true)
  }
  return (
    <form onSubmit={onSubmit} id="form">
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={handleq} id="newQuestion" placeholder="Enter question" value={newQuestion}/>
      <input maxLength={50} onChange={handlet} id="newTrueAnswer" placeholder="Enter true answer" value={newTrueAnswer}/>
      <input maxLength={50} onChange ={handlef} id="newFalseAnswer" placeholder="Enter false answer"  value={newFalseAnswer}/>
      <button disabled={disabled}  id="submitNewQuizBtn" >Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = (state) =>{
  return { 
  message: state.infoMessage.message,
  ques: state.form.newQuestion,
  tr: state.form.newTrueAnswer,
  falsy: state.form.newFalseAnswer
  }
}
//  const mapDispatchToProps = {setMessage}
  

  
  
export default connect(mapStateToProps,{setMessage})(Form)
