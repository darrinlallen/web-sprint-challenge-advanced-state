import React from 'react'
import {useState, useReducer} from 'react'
import initialWheelState   from '../state/reducer'
import { Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'
let initial =0
let active;
let bletter = "here"
let classy = 'no'
let wheelnum = 0
let cnt = 0
export function Wheel(props) {
  const [index, setindex] = useState(wheelnum)
  const [state, dispatch] = useReducer(reducer)

  wheelnum = index
 

  if (index ==0 ){
    cnt++
    active = 0
   initial =0
  }
  else if (index ==5) {
    cnt++
    active = 5
    initial =5
  
  }
  else if (cnt ===0){
    cnt++
    active=0
    initial=0
  
  }

 

  function clock (){
   initial = index
   initial = index
   bletter = "not here"   
       if (wheelnum ==5 ){
        if (initial ==5){
         setindex(0)
         initial=0
         active=0}
         }
         else {
          setindex(index+1)
          initial = initial+1
          active = active +1
         }
  
      if (wheelnum ==5){
        if (initial==0){
          setindex(0)
          active =1
        }
        else {
      setindex(index+1)
      initial = initial+1
      active = active +1
    }   

  }
//    if (index >0){
//   active = index -1
//    }
//    else {
//      active = index
 //   }
//    wheelnum = index
}

    function cclock (){
      initial = 0
      bletter = "not here"
      
          if (wheelnum ==0 ){
           if (initial ==5 && wheelnum ==0){
            setindex(5)
            initial=3
            active=93}
            }
            else {
             setindex(2)
             initial = 4
             active = 93
            }
   

            
         if (wheelnum ==0){
           if (initial==0){
             setindex(0)
             active =83
           }
           else {
         setindex(4)
         initial = 3
         active = 38
       }   
    
      }
      active=7
    }   
  
 
  
  return (
    <div id="wrapper">
      <div id="wheel">
      { 
        [0, 1, 2, 3, 4, 5].map((idx) => (
          
          <><div key={idx} style={{ "--i": idx }} className={`${(idx === active)? (classy ='cog active', 'cog active') : 'cog'}`}>{`${(( idx === active)   )? 'B' : ''}`}</div></>
          
            
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