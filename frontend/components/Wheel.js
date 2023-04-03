import React from 'react'
import {useState, useReducer, useEffect} from 'react'
import initialWheelState   from '../state/reducer'
import { moveClockwise, moveCounterClockwise, Wheels } from '../state/action-creators'
import {connect} from 'react-redux'
import reducer from '../state/reducer'

let done =0
let active =0
export function Wheel(props) {
  const [state, dispatch] = useReducer(reducer, initialWheelState)
  const [active, setactive] = useState(0)
let initial
localStorage.setItem('finally', JSON.stringify(active))
done= JSON.parse(localStorage.getItem('finally'))

console.log(done)

  function clock (){
  
initial = active
          
        if (initial ==5){
         
         initial=0
         
         setactive(0)
         localStorage.setItem('finally', JSON.stringify(active))
         done= JSON.parse(localStorage.getItem('finally'))


      }
         
         else {
      
          initial = initial+1
          
          setactive(initial)
          localStorage.setItem('finally', JSON.stringify(active))
done = JSON.parse(localStorage.getItem('finally'))

         }

        
        }

    function cclock (){
      
      initial = done

        
        
           if (initial ==0){
            
            initial=5
        
          setactive(initial)
           localStorage.setItem('finally', JSON.stringify(active))
           done = JSON.parse(localStorage.getItem('finally'))

            }
            
            else {
             
             initial = initial-1
             
      setactive(initial)
      localStorage.setItem('finally', JSON.stringify(active))
      done= JSON.parse(localStorage.getItem('finally'))

            }
     
        

      
    }
  return (
    <div id="wrapper">
      <div id="wheel">
  
  {
  
    [0,1,2,3,4,5].map((idx) => (
             <><div key={idx} style={{ "--i": idx }} className={(idx === done)? 'cog active' : 'cog'}>{( idx === done   )? 'B' : ''}</div></>))    
            
     
      
    
       
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


export default connect(mapStateToProps,{})(Wheel)

