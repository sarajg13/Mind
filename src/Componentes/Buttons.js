import React from "react";
import './componentes.css'

function Buttons (props) {
  return (
    <div>
    <button className= 'Buttons  Item_nav'>{props.descripcion}</button>
    </div>

  );
  
};

export default Buttons;