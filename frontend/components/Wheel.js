import React from 'react'
import {useState, useReducer} from 'react'
import Wheelie, {initialWheelState }  from '../state/reducer'
import { Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'
let initial =0
export function Wheel(props) {
  const [index, setindex] = useState(initial)
  const [pos, setpos] = useState(0)
  const [state, dispatch] = useReducer(reducer)

  let num = props.index
  function clock (){
  
    if (props.index == 5){
    num = 0
      setindex(0)
    }
    else {
      if (props.index < 5){
    setindex(index+1)}

    num = index
   
  }  
  console.log(index)
  props.Wheels(num)
}
    function cclock (){
     
      if (props.index == 0 ){
       num = 5
        setindex(5)
      }
        else {
      
        setindex(index-1)
        num = index
          setpos(num)
      console.log(num)}
props.Wheels(num)
      }
  
  let cl = "cog active"
  let cl1 = "cog"
  let cnt = 0
  
  
  return (
    <div id="wrapper">
      <div id="wheel">
      { 
        [0, 1, 2, 3, 4, 5].map((idx) => (
        
          <><div key={idx} style={{ "--i": idx }} className={`${idx == num? 'cog active' : 'cog'}`}>{`${idx == num ? 'B' : ''}`}</div></>
          
            
          ))
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
    index: state.Wheelie.index
    }
  }


export default connect(mapStateToProps,{Wheels})(Wheel)