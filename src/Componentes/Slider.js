import React from "react";
import { useEffect, useState } from "react";

function Slider ({imgCarruselHabilidad}) {

  const [initialPosition, setInitialPosition]= useState(0);
  const [finalPosition, setFinalPosition ] = useState(4);
  const [skillToShow, setSkillToShow] = useState([]);

  useEffect( () => {
   getSkillsInitial();
  },[]);

  const getSkillsInitial = ()=>{
    const setNewState = imgCarruselHabilidad.slice(0,4);
    setSkillToShow (setNewState);
  }

  const handleSkillChange = (action) =>{
    if (action === 'next'){
      if(finalPosition !== imgCarruselHabilidad.length){
        const newInitialPosition = initialPosition + 1 ;
        const newFinalPosition = finalPosition + 1 ;

        setInitialPosition(newInitialPosition);
        setFinalPosition(newFinalPosition);

        const newArray = imgCarruselHabilidad.slice(newInitialPosition,newFinalPosition);

        setSkillToShow(newArray);
      }else{ 
        setInitialPosition(0);
        setFinalPosition(4);

        getSkillsInitial();
      }
    }
    if (action === 'previous'){
      if(initialPosition !== 0){
        const newInitialPosition = initialPosition - 1 ;
        const newFinalPosition = finalPosition - 1 ;

        setInitialPosition(newInitialPosition);
        setFinalPosition(newFinalPosition);

        const newArray = imgCarruselHabilidad.slice(newInitialPosition,newFinalPosition);

        setSkillToShow(newArray)
      }else{ 
        setInitialPosition(0);
        setFinalPosition(4);
        getSkillsInitial();
      }
    }
  }
 
  return(
 
   <div className='Container-externo-carrusel'>
   {skillToShow.map((show) =>{

    return( 

    <div className="Box-cards_habilidades" key={show.id}>
     <p className="title-cards-habilidades">{show.title}</p>
     <div className="Box-img-cards-habilidades">
       <img className="image-cards-habilidades"  src= {require(`../assets/${show.img}.png`)}/> 
     </div>
    </div>

    )
   })} 

 
      <img onClick={()=>handleSkillChange('previous')} className='Arrow-left' src= {require(`../assets/LEFT_ARROW.png`)} />

    
      <img onClick={()=>handleSkillChange('next')}  className='Arrow-right' src= {require(`../assets/RIGHT_ARROW.png`)}/>


  </div>
 
  )
}


export default Slider;
