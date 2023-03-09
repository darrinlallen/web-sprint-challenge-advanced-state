import React from 'react'
import { useState } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../state/action-creators'

let answer = ''
let foo =''
let bar = ''
let choiceme1 = 'Select'
let c1 = ''
let c2 = ''
let choiceme2 = 'Select'
 function Quiz(props) {
  const {state} = props
  const [selectme1, setselectme1] = useState('answer')
  const [selectme2, setselectme2] = useState('answer')
   const {unload} = props
  const [choice1, setchoice1] = useState('Select')
  const [choice2, setchoice2] = useState('Select')
  const[disabled, setdisabled] = useState(true)
 
  function select1(){
  setselectme1('answer selected')
  foo = selectme1
  setchoice1('SELECTED')
  c1 = choice1
  choiceme1 = choice1
  setchoice2('Select')
  c2 = choice2
  setdisabled(false)
  setselectme2('answer')
  }
  function select2() {
   setselectme2('answer selected')
   bar = selectme2
    setchoice2('SELECTED')
    choiceme2 = choice2
    c2 = choice2
    setchoice1('Select')
    c1 =choice2
    setselectme1('answer')
    setdisabled(false)
    }
  

  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>
             
            <div id="quizAnswers">
            <div className={selectme1}>

          
                A function
                <button  onClick={select1}>
                  {choice1}
                </button>
              </div>
                
              <div className={selectme2}>
 
          
                An elephant
                <button onClick={select2} >
                  {choice2}
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

