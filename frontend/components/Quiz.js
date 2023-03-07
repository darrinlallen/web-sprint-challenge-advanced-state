import React from 'react'
import { useState } from 'react'

let answer = ''
let choiceme1 = 'SELECT'
let choiceme2 = 'SELECT'
export default function Quiz(props) {
  const [selectme, setselectme] = useState('')
  const [choice1, setchoice1] = useState('SELECT')
  const [choice2, setchoice2] = useState('SELECT')
  const[disabled, setdisabled] = useState(true)

  function select1(){
  setselectme('answer selected')
  
  setchoice1('SELECTED')
  choiceme1 = choice1
  setchoice2('select')
  setdisabled(false)
  }
  function select2() {
   setselectme('answer selected')
    setchoice2('SELECTED')
    choiceme2 = choice2
    setchoice1('select')
    }
  

  
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>
             
            <div id="quizAnswers">
              <div className={`${choiceme1 === 'SELECTED' ? 'answer selected' : 'answer'}`}>

          
                A function
                <button onClick={select1}>
                  {choice1}
                </button>
              </div>
                
              <div className={`${choiceme2 === 'SELECTED' ? 'answer selected' : 'answer'}`}>

          
                An elephant
                <button onClick={select2}>
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
