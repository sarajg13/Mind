import React from "react"
import './componentes.css'


function BubbleText1 (props) {
  return( 
    <div className="Container_bobble">
      <img className="Bubble-img1" src ={require(`../assets/BUBBLE_${props.imagen}.png`)} />
      <div className="message_bubble1" >{props.message}
      </div>
    </div>
  )
}

export default BubbleText1;