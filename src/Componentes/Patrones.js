import React from "react";
import './componentes.css';


function Patrones () {

  return (
    <div className="Container_grid"  >
      <div className="Patrons_trait" style={{marginRight:'3rem'}} >
      < img className="PatronImg" src= {require (`../assets/PATRON_CONFORMISTA.png`)}/>
      <div className= "Traits  Traits-conformista"   style= {{color:'#4bddad'}}  >Conformista</div>
      </div>
      <div className="Patrons_trait">
      <img className="PatronImg"   src= {require (`../assets/PATRON_OPTIMISTA.png`)}/>
      <div className="Traits Traits-optimista"  style= {{color:'#53f6a5'}} >Optimista</div>
      </div>
      <div className=" Patrons_trait" style={{marginLeft:'2rem'}}>
      <img className="PatronImg_equilibrado" src = {require (`../assets/PATRON_EQUILIBRADO.png`)}/>
      <div className="Trait_equilibrado">Equilibrado</div>
      </div>
      <div className="Patrons_trait" style={{marginRight:'3rem'}}>
      <img className="PatronImg" style={{width:'7.5rem'}}  src= {require(`../assets/PATRON_CONSCIENTE.png`)}/>
      <div className="Traits Traits-optimista" style= {{color:'#50f3d3'}}>Consciente</div>
      </div>
      <div className="Patrons_trait">
      <img className="PatronImg" style={{width:'8rem'}}  src = {require(`../assets/PATRON_PRUDENTE.png`)}/>
      <div className="Traits Traits-prudente" style= { {color:'#4bddad'}}>Prudente</div>
      </div>
      <div className="Patrons_trait">
      <img className="PatronImg" style={{width:'7.5rem'}} src = {require(`../assets/PATRON_EFICIENTE.png`)}/>
      <div className="Traits Traits-eficiente" style= { {color:'#53f6a5'}}>Eficiente</div>
      </div>
      <div className="Patrons_trait" style={{marginRight:'3rem'}}>
      <img className="PatronImg" style={{width:'8.5rem'}} src = {require(`../assets/PATRON_VULNERABLE.png`)}/>
      <div className="Traits Traits-vulnerable" style= {{color:'#4ef2ed'}}>Vulnerable</div>
     </div>
      <div className="Patrons_trait">
      <img className="PatronImg" style={{width:'8rem'}}  src = {require(`../assets/PATRON_RESILIENTE.png`)}/>
      <div className="Traits Traits-resiliente"  style= { {color:'#50f3d3'}}>Resiliente
      </div>
      </div>
      <div className="Patrons_trait">
      <img className="PatronImg" style={{width:'8rem'}} src = {require(`../assets/PATRON_EXIGENTE.png`)}/>
      <div className="Traits Traits-exigente" style= {{color:'#4bddad'}}>Exigente</div>
      </div>
     </div>

  );

};

export default Patrones 