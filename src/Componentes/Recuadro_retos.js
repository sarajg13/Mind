import React from "react";




function Retos (props) {

  const Box = {
    maxWidth:'90rem',
    padding:'1rem 1.5rem 1rem 0.5rem',
    margin: '0 14rem',
    backgroundColor:'#f2f2f2',
    borderRadius:'30px',
    display:'flex',
    flexDirection: 'row',
    alignItems:'flex-end',
    justifyContent:'center',
  }
  const image = {
   width:'8rem',

  }

  const Box_retos_img = {
    margin:'0rem',
    padding:'5px 12px',
    backgroundColor:'#F8F9F9',
    borderRadius:'30px',


  }

  const Container1 = {
     display:'flex',
     flexDirection:'column',
     marginLeft:'20px',
     marginRight:'40px',
     gap:'1rem'}

  const Text ={
    fontSize:'1.8rem',
    fontWeight: '700',}

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

  return(
  <div className="Box_retos" style={Box}>
    <div className="Box_retos-img" style={Box_retos_img}>
    <img src= {require(`../assets/${props.image}.png`)} style={image}/>
    </div>
    <div className="Container1" style={Container1}>
     <div className="Box_text">
       <p className="Text" style={Text}>Identifica cuando es momento<br/>
      para descansar</p>
        <p style={{ fontSize:'1.5rem',fontWeight: '400',marginTop:'8px'}}>Autocuidado</p>
     </div>
      <div className="Box_like" style={{display:'flex',
        flexDirection: 'row',alignItems:'center',}}>
        <img src= {require(`../assets/LIKE.png`)} style={Like}/>
        <p style={{ fontSize:'1.1rem',fontWeight: '900',marginLeft:'4px'}}>1.354</p>
      </div>
      </div>
      <div className="Box_button" style={{fontSize:'1.5rem',}}>
         <button style={Button}>Entrénate </button>
      </div>
    </div> 

   

  )

}

export default Retos