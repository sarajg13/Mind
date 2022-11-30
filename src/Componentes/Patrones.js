import React from "react";
import styled from "styled-components";

function Patrones (props){

  const PatronImg = styled.img`
  width:${(props)=>props.width}
  
  `;
  const Traits =styled.p`
  color:${(props)=>props.color};
  font-size: 1.2rem;
  font-weight:600;
  margin-top:1rem;
  margin-top:${(props)=>props.margin}
  `;

  const Trait_equilibrado = styled.p`
  color:#55f889;
  font-size: 2rem;
  font-weight:600;
  margin-top:1rem;
  `;

   const Continer_grid =styled.div`
   display:grid;
   grid-template-columns:auto auto auto;
   column-gap:0.3rem;
   row-gap:1rem;
   margin: 4rem 20rem 20rem 22rem;
   align-items:center;
   `;

   const Patrons_trait = styled.div`
   display: grid;
   justify-items: center;
   `;

  return (
    <Continer_grid>
      <Patrons_trait>
      <PatronImg width={'9.8rem'} src = {require(`../assets/PATRON_CONFORMISTA.png`)}/>
      <Traits color='#4bddad'>Conformista</Traits>
      </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'9.5rem'} src = {require(`../assets/PATRON_OPTIMISTA.png`)}/>
      <Traits color='#53f6a5'>Optimista</Traits>
      </Patrons_trait>
      <Patrons_trait position='relative' >
      <PatronImg width={'15rem'}  src = {require(`../assets/PATRON_EQUILIBRADO.png`)}/>
      <Trait_equilibrado>Equilibrado</Trait_equilibrado>
      </Patrons_trait>
      <Patrons_trait >
      <PatronImg width={'7.5rem'} src = {require(`../assets/PATRON_CONSCIENTE.png`)}/>
      <Traits color='#50f3d3'>Consciente</Traits>
      </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'9rem'} src = {require(`../assets/PATRON_PRUDENTE.png`)}/>
      <Traits color='#4bddad'>Prudente</Traits>
      </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'7.5rem'}  src = {require(`../assets/PATRON_EFICIENTE.png`)}/>
      <Traits color='#53f6a5'>Eficiente</Traits>
      </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'9.8rem'} src = {require(`../assets/PATRON_VULNERABLE.png`)}/>
      <Traits margin='1.5rem' color='#4ef2ed'>Vulnerable</Traits>
     </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'9rem'} src = {require(`../assets/PATRON_RESILIENTE.png`)}/>
      <Traits color='#50f3d3'>Resiliente</Traits>
      </Patrons_trait>
      <Patrons_trait>
      <PatronImg width={'9rem'} src = {require(`../assets/PATRON_EXIGENTE.png`)}/>
      <Traits color='#4bddad'>Exigente</Traits>
      </Patrons_trait>
      
     </Continer_grid>

  )

};

export default Patrones 