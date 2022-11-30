
import './App.css';
import React from 'react';
import Buttons from './Componentes/Buttons';
import BubbleText1 from './Componentes/Bubble1';
import BubbleText2 from './Componentes/Bubble2';
import Patrones from './Componentes/Patrones';
import Retos from './Componentes/Recuadro_retos';


const imagenes = require.context('./assets',true);


function App() {
  return (
    <div className = 'App'>
      <img className= 'Imagen_fondo' src= {imagenes (`./TOP_BACKGROUND.png`) } alt='Imagen background'/>
      <div className='Contenido'>
      <div className='Nav_container'>
      <img className='Logo-tyni' src={imagenes (`./whiteLogo.svg`)} alt='Logo principal'/>
        <img className='Logo' src={imagenes (`./LOGO_NAME.png`)} alt='Logo principal'/>
        <nav className='Nav_url'>
          <a className='Item_nav' href='link1'>Entrenamientos</a>
          <a className='Item_nav'href='link1'>Habilidades</a>
          <a className='Item_nav' href='link1'>Preguntas frecuentes</a>
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
        
         <BubbleText1
           imagen ='1'
           message = 
           {`Quiero entender
 mis emociones`}/> 
         < BubbleText2
           imagen ='2'
           message = 
           {`Quiero manejar
mejor mi tiempo`}/> 
        </div>
        <div className='Container_dowland'>
          <div className='Container_text-dowland'>
          <h2 className='subtittles'> 
          Descarga<br/>
          nuestra app</h2>
          <p className='Text-dowland'>Gratis para descargar. Gratis para usar.</p>
          </div>
          <div className='Container_icons'>
           <img className='Icon-dowland' src= {imagenes(`./GOOGLE_PLAY.png`)} alt='Icon google play'/>
           <img className='Icon-dowland' src= {imagenes(`./APP_STORE.png`)} alt='Icon app store'/>
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
             <p className='Text-recomendaciones'>
             Explora recomendaciones<br/>
             de acuerdo a tus retos personales</p> 
             <div className='Container_retos'>
             <Retos image='AUTOCUIDADO'></Retos>
             <Retos image='TOLERANCIA_INCERTIDUMBRE'></Retos>
             <Retos image='RELACIONES SIGNIFICATIVAS'></Retos>
             <Retos image='MANEJO_ESTRES'></Retos>
             </div>
        <div className='Container-text_patrones Text_habilidades'>
          <h2 className='Tittles'>
          Habilidades
          </h2>
          <p className='Text-subtittle'> 
          Desarrolla habilidades para alcanzar tu máxima<br/>
          productividad sin sacrificar tu bienestar
          </p>
        </div>
            
      </div>
      <div className='Contenido2'> 
          </div>
      </div>
         
      );
};

export default App;