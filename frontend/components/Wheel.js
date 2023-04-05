import React from 'react'
import {useState, useReducer, useEffect} from 'react'
import initialWheelState   from '../state/reducer'
import { moveClockwise, moveCounterClockwise, Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'

let done =0

export function Wheel(props) {
  const [state, dispatch] = useReducer(reducer, done)
let initial=0
  function clock (){
  
initial = done
          
        if (initial ==5){
         
         initial=0
         done =0
        
props.moveClockwise(0)
console.log(props.position)
      }
         
         else {
      
          initial = initial+1
          done = done +1
props.moveClockwise(initial)
console.log(props.position)
         }

        
        }

    function cclock (){
      
      initial = done

        
        
           if (initial ==0){
            
            initial=5
              done =5  
        
props.moveCounterClockwise(initial)
            }
            
            else {
             
             initial = initial-1
            done = done -1
props.moveCounterClockwise(initial)
console.log(props.position)
            }
     
        

      
    }
  return (
    <div id="wrapper">
      <div id="wheel">
  
  {
  
    [0,1,2,3,4,5].map((idx) => (
             <><div key={idx} style={{ "--i": idx }} className={(idx === props.position)? 'cog active' : 'cog'}>{( idx === props.position   )? 'B' : ''}</div></>))    
            
     
      
    
       
    }
      </div>
    
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={cclock}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={clock}>Clockwise</button>
      </div>
    </div>
       
  )
      }
  const mapStateToProps = (state) =>{
    return { 
    position: state.Wheelthing.pos
    }
  }


export default connect(mapStateToProps,{moveClockwise, moveCounterClockwise})(Wheel)