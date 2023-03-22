import { useReducer, useState } from 'react'
import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'
import helpers from '../../backend/helpers'
import { quizzes } from '../../backend/helpers'
import axios from 'axios'
import reducer, { initialMessageState } from '../state/reducer'
import { setMessage } from '../state/action-creators'

let answer = ''
let foo =''
let bar = ''
let choiceme1 = 'Select'
let c1 
let c2
let right
let neworder = ""
let id  = '' 
let ansid =''
let i =0;
let choiceme2 = 'Select'
 function Quiz(props) {
  const [state, dispatch] =useReducer(reducer, initialMessageState)


  const [i, seti] = useState(1)
  const [question, setquestion] = useState(quizzes[0].question)
  const [ans1, setans1] = useState(quizzes[0].answers[0].text)
  const [ans3, setans3] = useState(quizzes[0].answers[1].text)
  const [selectme1, setselectme1] = useState('answer')
  const [selectme2, setselectme2] = useState('answer')
  const [choice1, setchoice1] = useState('Select')
  const [choice2, setchoice2] = useState('Select')
  const [choice3, setchoice3] = useState('Select')
  const [choice4, setchoice4] = useState('Select')
  const[disabled, setdisabled] = useState(true)


  function select1(){
  setselectme1('answer selected')
  c1 = true
  setchoice1('SELECTED')
  setchoice2('Select')
  setdisabled(false)
  c2 = false
  props.setMessage('')
  }

  function select2() {
    c2 = true
    setdisabled(false)
   setselectme2(true)
    setchoice3('SELECTED')
    setchoice4('Select')
    c1 =false
    setselectme1('answer')
    props.setMessage('')
    }
  
    const getId = () => {
      const chars = 'abcdefghijklmnopqrstuvwxyz'
      let result = ''
      for (let i = 0; i < 5; i++) {
        result += chars[Math.floor(Math.random() * 26)]
      }
      return result
    }
function submit () {

  const chars = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < 5; i++) {
    result += chars[Math.floor(Math.random() * 26)]
  }
  id = result
  if (c1 == true){
  ansid = quizzes[0].answers[0].answer_id}
  else {
    ansid = quizzes[0].answers[1].answer_id
    
  }
  
if (quizzes[i].answers[0].correct == c1){
  right = true
}
else {
  right = false
}
console.log(quizzes[i].answers[0].correct)
console.log(right)
console.log(i)
  if (right == true){
    props.setMessage(`Nice job! That was the correct answer`)

  }
  else {
    props.setMessage(`What a shame! That was the incorrect answer`)

  }
  console.log(props)
  neworder = {"quiz_id": id, "answer_id":ansid  }
  axios.post('http://localhost:9000/api/quiz/answer', neworder)   
  .then(res => {
  
  
})
  .catch(err => {
    
  })
  setchoice1('Select')
  setchoice2('Select')
  setchoice3('Select')
  setchoice4('Select')
  c1 = false
  c2= false
  seti(i+1)

    setquestion(quizzes[i].question)
    setans1(quizzes[i].answers[0].text)
    setans3(quizzes[i].answers[1].text)
    }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{question}</h2>
             
            <div id="quizAnswers">
            <div className={`answer${quizzes[0].answers[0].correct === c1 ? ' selected': ''}`}>
            {ans1}
                <button onClick={select1}>
                  {quizzes[0].answers[0].correct === c1 ? 'SELECTED': 'Select'}
                </button>
              </div>
                
              <div className={`answer${quizzes[0].answers[0].correct === c2 ? ' selected' : ''}`}>
              {ans3}
                <button onClick={select2}>
                  {quizzes[0].answers[0].correct === c2 ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
            
            <button onClick={submit} disabled = {disabled} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    
    </div>
  )
    }
  const mapStateToProps = (state) =>{
    return {
    message: state.infoMessage.message
    }
  }

export default connect(mapStateToProps, {setMessage})(Quiz)



