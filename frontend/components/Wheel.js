import React from 'react'
import {useState, useReducer} from 'react'
import initialWheelState   from '../state/reducer'
import { Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'
import { act } from 'react-dom/test-utils'
let initial =0
let start =1
let active =1;
let bletter = "here"
let classy = 'no'
let wheelnum = 0
let cnt = 0
let a=0
let cl = false
export function Wheel(props) {

  const [index, setindex] = useState(wheelnum)
  const [state, dispatch] = useReducer(reducer)
const [c3, setc3] =  useState(true)
const [cc, setcc] = useState(0)
  wheelnum = index

 let str = [5,4,3,2,1,0]

  if (index ==0 ){
    cnt++
    active = 0
   initial =0
  }
  else if (index ==5 ) {
    cnt++
    active = 5
    initial =5
  
  }
  else if (cnt ==0){
    cnt++
    active=0
    initial=0
  }  



  function clock (){
  setc3(true)
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

      initial = index
        
        
           if (initial ==0){
            setindex(5)
            initial=5
            active=5}
            
            else {
             setindex(index-1)
             initial = initial-1
             active = active -1
            }
     
        

      
    }
  return (
    <div id="wrapper">
      <div id="wheel">
  
  {
  
   (c3 ==true) ? [0,1,2,3,4,5].map((idx) => (
             <><div key={idx} style={{ "--i": idx }} className={`${(idx === active)? 'cog active' : 'cog'}`}>{`${( idx === active  )? 'B' : ''}`}</div></>))    
            :   [5,4,3,2,1,0].map((idx) => (
              <><div key={idx} style={{ "--i": idx }} className={`${(idx === active)? 'cog active' : 'cog'}`}>{`${( idx === active  )? 'B' : ''}`}</div></>))
       
     
      
    
       
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
    that: state.Wheelie.this
    }
  }


export default connect(mapStateToProps,{})(Wheel)