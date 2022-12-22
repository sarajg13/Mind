import React from "react";
import './componentes.css'

function Buttons (props) {
  return (
    <div>
    <a href="https://mindtrackr.com/" className= 'Buttons  Item_nav'>{props.descripcion}
    </a>
    </div>

  );
  
};

export default Buttons;