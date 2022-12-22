
import './App.css';
import React from 'react';
import Buttons from './Componentes/Buttons';
import BubbleText1 from './Componentes/Bubble1';
import BubbleText2 from './Componentes/Bubble2';
import Patrones from './Componentes/Patrones';
import Retos from './Componentes/Recuadro_retos';
import otherRetos from './Componentes/Skillscards';
import otherRetosTwo from './Componentes/SkillcardsTwo';
import otherRetosthree from './Componentes/Skillcardthree';
import otherRetosfour from './Componentes/Skillcardfour';
import Slider from './Componentes/Slider';
import { useState, useEffect } from 'react';



const imagenes = require.context('./assets',true);


function App() {

 const imgCarrusel= [
  { id:1,
    title:'Adaptación al cambio',
    img:'ADAPTACION_CAMBIO'},

  { id:2,
    title:'Atencion al detalle',
    img: 'ATENCION_DETALLE'
  },
    
  {id:3,
  title:'Autoconfianza',
  img: 'AUTOCONFIANZA'
   },

  {id:4,
    title:'Autoconocimiento',
  img: 'AUTOCONOCIMIENTO'
  },

  {id:5,
    title:'Autocuidado',
  img: 'AUTOCUIDADO'
  },

  {id:6,
    title:'Automotivacion y disciplina',
  img: 'AUTOMOTIVACION_DISCIPLINA'
  },

  {id:7,
    title:'Comuncación asertiva',
  img: 'COMUNICACION_ASERTIVA'
  },


  {id:8,
    title:'Concentración',
  img: 'CONCENTRACION'
  }, 

  {id:9,
    title:'Liderazgo',
  img: 'LIDERAZGO'
  },

  {id:10,
    title:'Manejo de conflictos',
  img: 'MANEJO_CONFLICTOS'
  }, 

  {id:11,
    title:'Manejo del estrés',
  img: 'MANEJO_ESTRES'
  },  

  {id:12,
    title:'Regulación emocional',
  img: 'REGULACION_EMOCIONAL'
  }, 

  {id:13,
    title:'Relaciones significativas',
  img: 'RELACIONES SIGNIFICATIVAS'
  }, 

  {id:14,
    title:'Resiliencia',
  img: 'RESILIENCIA'
  }, 

  {id:15,
    title:'Toma de decisiones',
  img: 'TOMA_DECISIONES'
  }, 

  ]

  const [newReto,setNewReto] = useState (otherRetos[0]);
  const [newReto2,setNewReto2] = useState (otherRetosTwo[0])
  const [newReto3,setNewReto3] = useState (otherRetosthree[0])
  const [newReto4,setNewReto4] = useState (otherRetosfour[0])

  const selectCardRandom = () => {
    const i  = Math.floor(Math.random() * otherRetos.length);
    setNewReto(otherRetos[i])
  };
  
  useEffect(
    ()=>{
      const interval = setInterval(selectCardRandom,15000)
       return ()=> clearInterval(interval)
    }, [selectCardRandom]
  )

  const selectCardRandom2= () => {
    const i  = Math.floor(Math.random() * otherRetosTwo.length);
    setNewReto2(otherRetosTwo[i])
  };
  
  useEffect(
    ()=>{
      const interval = setInterval(selectCardRandom2,15000)
       return ()=> clearInterval(interval)
    }, [selectCardRandom2]
  );

  const selectCardRandom3 = () => {
    const i  = Math.floor(Math.random() * otherRetosthree.length);
    setNewReto3(otherRetosthree[i])
  };
  
  useEffect(
    ()=>{
      const interval = setInterval(selectCardRandom3,15000)
       return ()=> clearInterval(interval)
    }, [selectCardRandom3]
  );

  const selectCardRandom4 = () => {
    const i  = Math.floor(Math.random() * otherRetosfour.length);
    setNewReto4(otherRetosfour[i])
  };
  
  useEffect(
    ()=>{
      const interval = setInterval(selectCardRandom4,15000)
       return ()=> clearInterval(interval)
    }, [selectCardRandom4]
  );

          
  return (
    <div className = 'App'>
      {/* <img className= 'Imagen_fondo' src= {imagenes (`./TOP_BACKGROUND.png`) } alt='Imagen background'/> */}
      <div className='Contenido'> 
       <div className='Nav_container'>
        <div>
 <img className='Logo-tyni' src={imagenes (`./whiteLogo.svg`)} alt='Logo principal'/>
        <img className='Logo' src={imagenes (`./LOGO_NAME.png`)} alt='Logo principal'/>
        </div>
     
        <nav className='Nav_url'>
          <a className='Item_nav' href='#Section_Entrenamientos'>Entrenamientos</a>
          <a className='Item_nav'href='#Section_habilidades'>Habilidades</a>
          <Buttons descripcion = '¿Eres una empresa?'/>
        </nav>  
        </div>
        <div className='Container_heading'>
        <div className ='Text_heading'>
          <h1>
          ¿Qué reto quieres<br/>
          superar hoy?</h1>
        </div>
        <img className='People-image' src= {imagenes(`./PEOPLE_TEXTING.png`)} alt='people texting' />
         <BubbleText1/> 
         <BubbleText2/> 
        </div>
        <div className='Container_dowland'>
          <div className='Container_text-dowland'>
          <h2 className='subtittles'> 
          Descarga<br/>
          nuestra app</h2>
          <p className='Text-dowland'>Gratis para descargar. Gratis para usar.</p>
          </div>
          <div className='Container_icons'>
           <a href='https://play.google.com/store/apps/details?id=com.mindtrackr'><img className='Icon-dowland' src= {imagenes(`./GOOGLE_PLAY.png`)} alt='Icon google play'/></a>
           <a href='https://apps.apple.com/us/app/mindtrackr/id1642084811'>
           <img className='Icon-dowland' src= {imagenes(`./APP_STORE.png`)} alt='Icon app store'/>
           </a>
          </div>
        </div>
        <div className='Cointainer_tittle'>
          <p className='Tittles'> 
           Alcanza tu máxima productividad
           sin sacrificar tu bienestar</p>
        </div>
        <div className='Container_screen'>
          <img className='Screen-img' src= {imagenes(`./SCREEN_1.png`)} alt='Icon screen'/>
          <img className='Screen-img' src= {imagenes(`./SCREEN_2.png`)} alt='Icon screen'/> 
          <div className='Text-subtittle_container'>
          <p className='Text-subtittle'>
            Descubre los retos<br/>
            que te impiden mejorar<br/>
            tu productividad y<br/>
            tu bienestar</p>
        </div>
        </div>
        <div className='Container-text_patrones'>
          <h2 className='Tittles'>
             Patrones
          </h2>
          <p className='Text-subtittle'> 
          Rompe tus patrones<br/>
          negativos y alcanza el equilibrio</p>
        </div>
        <Patrones/>
        <img className='Axis' src= {imagenes(`./AXIS.png`)} alt='Icon screen'/>
        <h2 className='Axis-world1'>Productividad</h2>
        <h2 className='Axis-world2'>Bienestar</h2>
        <section id='Section_Entrenamientos' >
           <h2 className='Tittles Titles-sub'>
            Entrenamientos<br/>
            prácticos y personalizados</h2>
        <div className='Container_screen Container_screen2 '>
            <div className='Text-subtittle_container'>
               <p className='Text-subtittle '>
               Lee o escucha<br/>
               cada entrenamiento<br/>
               en <span className='Shading'>3 minutos</span><br/>
               </p>
             </div>
        <img className='Screen-img' src= {imagenes(`./SCREEN_3.png`)} alt='Icon screen'/>
        <img className='Screen-img' src= {imagenes(`./SCREEN_4.png`)} alt='Icon screen'/> 
        </div>
        </section>
             <p className='Text-recomendaciones'>
             Explora recomendaciones<br/>
             de acuerdo a tus retos personales</p> 
             <div className='Container_retos'>
              
             <Retos 
             image= {newReto.image}
             text= {newReto.text}
             descripcion={newReto.descripcion}
             like={newReto.like}
             />
             <Retos
             image= {newReto2.image}
             text= {newReto2.text}
             descripcion={newReto2.descripcion}
             like={newReto2.like}
              />
             <Retos 
             image= {newReto3.image}
             text= {newReto3.text}
             descripcion={newReto3.descripcion}
             like={newReto3.like}
             />
             <Retos 
             image= {newReto4.image}
             text= {newReto4.text}
             descripcion= {newReto4.descripcion}
             like= {newReto4.like}
             />

             </div>
         <section id='Section_habilidades'>
            <div className='Container-text_patrones Text_habilidades'>
                <h2 className='Tittles'>
                Habilidades
                </h2>
                <p className='Text-subtittle'> 
                Desarrolla habilidades para alcanzar tu máxima<br/>
                productividad sin sacrificar tu bienestar
                </p>
             </div> 
          <div iv className="Container-cards-habilidades">
           <Slider imgCarruselHabilidad = {imgCarrusel} />
         </div>
        </section>

        <div className='Container_dowland2'>
          <div className='Container_text-dowland'>
          <h2 className='subtittles'> 
          Descarga<br/>
          nuestra app</h2>
          <p className='Text-dowland'>Gratis para descargar. Gratis para usar.</p>
          </div>
          <div className='Container_icons'>
           <a href='https://play.google.com/store/apps/details?id=com.mindtrackr'><img className='Icon-dowland' src= {imagenes(`./GOOGLE_PLAY.png`)} alt='Icon google play'/></a>
           <a href='https://apps.apple.com/us/app/mindtrackr/id1642084811'>
           <img className='Icon-dowland' src= {imagenes(`./APP_STORE.png`)} alt='Icon app store'/>
           </a>
          </div>
        </div>
        <footer className='Container_footer'>
          <div className='Footer-section1'>
           <img className='Logo-symbol-footer' src={imagenes(`./LOGO_SYMBOL.png`)}/>
           <img className='Logo-name-footer' src={imagenes(`./LOGO_NAME.png`)}/>
           <p>Contáctanos en contacto@mindtrackr.com</p>
           <div>
            <p>
            Copyright © Mindtrackr S.A.S.<br/>
            Colombia<br/>
            2022
            </p>
           </div>
          </div>
          <div className='Footer-section2'>
            <img className='Instagram-logo-footer' src={imagenes(`./IG.png`)}/>
            </div>
          <div>
          <Buttons descripcion = '¿Eres una empresa?'/>
          </div>
          <div className='Lineas-vertical1'></div>
          <div className='Lineas-vertical2'></div>
        </footer>
      </div>
   </div>
         
      );
};

export default App;