 import React from "react"
 import {useState, useEffect } from "react";
 import './componentes.css'


 const text1 = [
"Quiero dejar de sentir pereza",
"Quiero ser organizado",
"Quiero cometer menos errores",
"Quiero pensar menos las cosas",
"Quiero ser analítico",
"Quiero liderar a otros",
"Quiero manejar la incertidumbre",
"Quiero ser más positivo",
"Quiero concentrarme más",
"Quiero tener más confianza en mi"
 ];

function BubbleText2 () {

  const [next1,setNext1] = useState (text1[0]);
  
  const Bubble2 = () => {
    const i  = Math.floor(Math.random() * text1.length);
    setNext1(text1[i])
  };
  
  useEffect(
    ()=>{
      const interval2 = setInterval(Bubble2,4000);
       return ()=> clearInterval(interval2)
    }, [Bubble2]
  )

  return( 
    <div className="Container_bubble">
      <img className="Bubble-img2" src ={require(`../assets/BUBBLE_2.png`)} />
      <div className="message_bubble2">{next1}
      </div>
    </div>
  )
}

export default BubbleText2