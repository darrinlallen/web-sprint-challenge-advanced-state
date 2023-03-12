import { useReducer, useState } from 'react'
import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'
import  reducer , {initialQuizState } from '../state/reducer'
import helpers from '../../backend/helpers'
import { quizzes } from '../../backend/helpers'
let answer = ''
let foo =''
let bar = ''
let choiceme1 = 'Select'
let c1 
let c2 
let choiceme2 = 'Select'
 function Quiz(props) {
  const [state, dispatch] =useReducer(reducer, initialQuizState)
  const [selectme1, setselectme1] = useState('answer')
  const [selectme2, setselectme2] = useState('answer')
  const [choice1, setchoice1] = useState('Select')
  const [choice2, setchoice2] = useState('Select')
  const [choice3, setchoice3] = useState('Select')
  const [choice4, setchoice4] = useState('Select')
  const[disabled, setdisabled] = useState(true)
 console.log(state)


  function select1(){
  setselectme1('answer selected')
  c1 = true
  setchoice1('SELECTED')
  setchoice2('Select')
  setdisabled(false)
  c2 = false
  }

  function select2() {
    c2 = true
    setdisabled(false)
   setselectme2(true)
    setchoice3('SELECTED')
    setchoice4('Select')
    c1 =false
    setselectme1('answer')
    }
  

  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>
             
            <div id="quizAnswers">
            <div className={`answer${quizzes[0].answers[0].correct === c1 ? ' selected': ''}`}>
            {quizzes[0].answers[0].text}
                <button onClick={select1}>
                  {quizzes[0].answers[0].correct === c1 ? 'SELECTED': 'Select'}
                </button>
              </div>
                
              <div className={`answer${quizzes[0].answers[0].correct === c2 ? ' selected' : ''}`}>
              {quizzes[0].answers[1].text}
                <button onClick={select2}>
                  {quizzes[0].answers[0].correct === c2 ? 'SELECTED' : 'Select'}
                </button>
              </div>
            </div>
            
            <button disabled = {disabled} id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    
    </div>
  )
}
export default connect(st => st, actionCreators)(Quiz)

