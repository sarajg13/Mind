import React from "react";
import './componentes.css';


function Retos (props) {

  const Box = {
    width:'60%',
    height:'80%',
    padding:'1rem 1.5rem 1rem 1rem',
    margin: '0 14rem',
    backgroundColor:'#f2f2f2',
    borderRadius:'30px',
    display:'flex',
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent: 'space-between',
 
  }

  const image = {
   width:'8rem',
  height: '8rem',

   
  }

  const Box_retos_img = {
    margin:'0rem',
    padding:'5px 12px',
    backgroundColor:'#F8F9F9',
    borderRadius:'30px',
    alignSelf:'center',
    
  }

  const Container1 = {
    width:'100%',
     display:'flex',
     flexDirection:'column',
     justifyContent:'flex-start',
     gap:'1rem',
     marginLeft:'20px'
    }

  const Text ={
    fontSize:'1.8rem',
    fontWeight: '700',
    width:'85%'
  }

  const Like = {
    width:'2rem',
  }

  const Button ={
    backgroundColor:'#00003c',
    fontWeight: '700',
    borderRadius:'50px',
    color: '#ffffff',
    padding: '0.6rem 1.8rem',
    fontSize: '1.3rem',
  }

  return (
     
  <div className="Box_retos" style={Box}>
    <div className="Box_retos-interno"></div>
    <div className="Box_retos-img" style={Box_retos_img}>
      <img className="retos_img"  src= {require(`../assets/${props.image}.png`)} style={image}/>
    </div>
    <div className="Container1" style={Container1}>
       <div className="Box_text">
          <p className="Text" style={Text}> {props.text}</p>
          <p style={{ fontSize:'1.5rem',fontWeight: '400',marginTop:'8px'}}>{props.descripcion}</p>
       </div>
      <div className="Box_like" style={{display:'flex',
        flexDirection: 'row',alignItems:'center',}}>
          <img src= {require(`../assets/LIKE.png`)} style={Like}/>
          <p style={{ fontSize:'1.1rem',fontWeight: '900',marginLeft:'4px'}}>{props.like}</p>
      </div>
    </div>
      <div className="Box_button" style={{fontSize:'1.5rem',}}>
         <button style={Button}>Entrénate </button>
      </div>
    </div> 
  )
};

export default Retos