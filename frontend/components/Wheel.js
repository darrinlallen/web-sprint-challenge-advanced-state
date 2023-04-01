import React from 'react'
import {useState, useReducer} from 'react'
import initialWheelState   from '../state/reducer'
import { moveClockwise, moveCounterClockwise, Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'
import { act } from 'react-dom/test-utils'

let initial =0
let start =1
let active =0;
let bletter = "here"
let classy = 'no'
let wheelnum = 0
let cnt = 0
let a=0
let cl = false
export function Wheel(props) {
  const [index, setindex] = useState(0)
  const [state, dispatch] = useReducer(reducer, initialWheelState)
  props.moveCounterClockwise(active)

  wheelnum=index
  function clock (){
    console.log(index)
    
    initial = props.pos
  
        if (initial ==5){
         setindex(0)
         initial=0
         active=0
         props.moveClockwise(0)
      }
         
         else {
          setindex(index+1)
          initial = initial+1
          active = active +1
          props.moveClockwise(active)

         }
        }

    function cclock (){
        
      initial = props.pos
        
        
           if (initial ==0){
            setindex(5)
            initial=5
            active=5
          props.moveCounterClockwise(5)
          }
            
            else {
             setindex(index-1)
             initial = initial-1
             active = active -1
      props.moveCounterClockwise(active)
            }
     
        

      
    }
  return (
    <div id="wrapper">
      <div id="wheel">
  
  {
  
    [0,1,2,3,4,5].map((idx) => (
             <><div key={idx} style={{ "--i": idx }} className={`${(idx ===props.pos)? 'cog active' : 'cog'}`}>{`${( idx === props.pos  )? 'B' : ''}`}</div></>))    
            
     
      
    
       
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
    pos: state.Wheelthing.pos
    }
  }


export default connect(mapStateToProps,{moveClockwise, moveCounterClockwise})(Wheel)

