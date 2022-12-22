import React, { useState,useEffect } from "react"
import './componentes.css'



const text = [
  'Quiero entender mis emociones',
  'Quiero identificar lo que más me motiva',
  'Quiero dejar de sentirme agotado',
  'Quiero controlar mi estrés',
  'Quiero saber cómo decir lo que siento',
  'Quiero relacionarme mejor con otros',
  'Quiero solucionar un conflicto con alguien',
  'Quiero adaptarme a un cambio',
  'Quiero manejar mejor mi tiempo',
  'Quiero organizar mis tareas',
  ];
 
 
function BubbleText1 () {

  const [next,setNext] = useState (text[0]);

  const Bubble = () => {
    const i  = Math.floor(Math.random() * text.length);
    setNext(text[i])
  };
  
  useEffect(
    ()=>{
      const interval = setInterval(Bubble,4000)
       return ()=> clearInterval(interval)
    }, [Bubble]
  )
  
  return( 
    <div className="Container_bubble">
      <img className="Bubble-img1" src ={require(`../assets/BUBBLE_1.png`)} />
      <div className="message_bubble1"> {next}
      </div>
    </div>
  )
};



export default BubbleText1;