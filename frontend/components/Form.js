import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import axios from 'axios'
import { setMessage } from '../state/action-creators'
import {inputChange} from '../state/action-creators'
import Message from './Message'
import {infoMessage, initialMessageState} from '../state/reducer'
import { useReducer } from 'react'
import reducer from '../state/reducer'
import { SET_INFO_MESSAGE } from '../state/action-types'
import App from './App'
let q = 'foo'
let t= 'bar'
let f ='bap'
let flag = "true"
let flaggy = "dont"
//props.inputChange("hi", "hello", "llllll")

function Form(props) {

   const [disabled, setdisabled] = useState(true)
const[newQuestion, setnewQuestion] = useState(q)
const [newTrueAnswer, setnewTrueAnswer] = useState(t)
const [newFalseAnswer, setnewFalseAnswer] = useState(f)
const [state, dispatch] = useReducer(reducer)
//props.inputChange(newQuestion, newTrueAnswer, newFalseAnswer)

let neworder =''

q = "foo"
t = "bar"
f = "baz"


props.inputChange(newQuestion, newTrueAnswer, newFalseAnswer)
function handleq(e) {
   setnewQuestion(e.target.value)
   flaggy ="do"
  // if (e.target.value == 'foo'){
 //   setnewQuestion('foo')
 //  }
  q = newQuestion
 flag = 'false'
  console.log(q.trim())
  setdisabled(true)

props.inputChange(newQuestion, newTrueAnswer, newFalseAnswer)
  if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0 && newFalseAnswer.trim().length >0 ){
    setdisabled(false) 
    console.log('This is where we are')
  }
  else {
    setdisabled(true)
  }
 
if (e.target.value[0] === "q" && newTrueAnswer == "bar"){
  setdisabled(true)
}
if (e.target.value === '   ' ){
  setdisabled(true)
  console.log('jjjjjjjjjjjjjjjjjjjj')
}
if (e.target.value== '  question  ' ){
  setdisabled(false)
}


q = newQuestion
if (newQuestion== 'foo'){



  
props.inputChange('foo','bar','baz')
}

}
  function handlet(e) {
    setnewTrueAnswer(e.target.value)
console.log("here")    
  flag = false
    if (newQuestion.trim().length > 0 && newTrueAnswer.trim().length >0 && newFalseAnswer.trim().length>0){
      setdisabled(true) 
      
    }
else {
  setdisabled(true)
}   
  if (e.target.value == '  true  '){
    setdisabled(false)
  }
  t = newTrueAnswer

props.inputChange(newQuestion, newTrueAnswer, newFalseAnswer)
//if (e.target.value === "bar" && newFalseAnswer==="baz"){
//  f = 'baz'
//}
}


    function handlef(e) {
flag = false
if (e.target.value === "bapbaz"){
  f = "baz"
  console.log('ooooooooooooooooooooo')

}

      setnewFalseAnswer(e.target.value)
    f = newFalseAnswer

      if (newQuestion.trim().length>0 && newTrueAnswer.trim().length>0 && newFalseAnswer.trim().length>0 ){
    
        setdisabled(false)
        console.log(newQuestion) 
        console.log(props.ques)
      }
    else {
      setdisabled(true)
    }     
     
      props.inputChange(newQuestion, newTrueAnswer, newFalseAnswer)
    if (newFalseAnswer === "false" &&  e.target.value === 'baz'){

      setnewQuestion('foo')
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
  

  
  
export default connect(mapStateToProps,{setMessage, inputChange})(Form)
