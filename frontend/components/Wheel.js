import React from 'react'
import {useState, useReducer} from 'react'
import initialWheelState   from '../state/reducer'
import { Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'
let initial =0
export function Wheel(props) {
  const [index, setindex] = useState(initial)
  const [state, dispatch] = useReducer(reducer)
  let active = index

  console.log(initial)
  console.log(active)

  function clock (){
    initial = index
   
    if (initial ==5 ){
      setindex(0)
      initial =0
    }
    else {
    setindex(initial+1)
      initial = initial +1
    }
   active = index -1

  props.Wheels(active)
}
    function cclock (){
      initial = index
      console.log(index)
      console.log(active)
      if (initial == 0 ){
        setindex(5)
        initial =5
      }
        else {
      
        setindex(initial-1)
        initial = initial -1
          }
         active = index -1
         
props.Wheels(active)
      }
  
 
  
  return (
    <div id="wrapper">
      <div id="wheel">
      { 
        [0, 1, 2, 3, 4, 5].map((idx) => (
          
          <><div key={idx} style={{ "--i": idx }} className={`${(idx === active )? 'cog active' : 'cog'}`}>{`${(idx === index )? 'B' : ''}`}</div></>
          
            
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