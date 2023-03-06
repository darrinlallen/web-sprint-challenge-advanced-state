import React from 'react'
import {useState} from 'react'
let initial =0
export default function Wheel(props) {
  const [index, setindex] = useState(initial)
  
  let num =index
  function clock (){
   
  
    if (index == 5){
    num = 0
      setindex(0)
    }
    else {
      if (index < 5){
    setindex(index+1)}

    num = {index}
    
    console.log(num)}

    }
  
    function cclock (){
     
      if (index == 0 ){
       num = 5
        setindex(5)
      }
        else {
      
        setindex(index-1)
        num = {index}
     
      console.log(num)}
        
      }
  
  let cl = "cog active"
  let cl1 = "cog"
  let cnt = 0
  
  
  return (
    <div id="wrapper">
      <div id="wheel">
      { 
        [0, 1, 2, 3, 4, 5].map((idx) => (
        
          <><div key={idx} style={{ "--i": idx }} className={`${idx === num ? 'cog active' : 'cog'}`}>{`${idx === num ? 'B' : ''}`}</div></>
          
            
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
