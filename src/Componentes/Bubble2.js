 import React from "react"
 import './componentes.css'


function BubbleText2 (props) {
  return( 
    <div className="Container_bobble">
      <img className="Bubble-img2" src ={require(`../assets/BUBBLE_${props.imagen}.png`)} />
      <div className="message_bubble2" >{props.message}
      </div>
    </div>
  )
}

export default BubbleText2