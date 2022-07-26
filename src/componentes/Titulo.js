import { useState } from "react";
import "../css/Titulo.css"
// import muro from  "../img/muro.png"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faCrown}from "@fortawesome/free-solid-svg-icons"


export const Titulo = () => {

  

  const [estado,setEstado] = useState(false)



const d = "D";
const e = "e";
const s = "s";
const a = "a";
const r = "r";
const o = "o";
const l = "l";
const f = "f";
const n = "n";
const t = "t";
const dd = "d";

  return (    
       
         <div id="contenedorHeader">   
    
   
            <div id="contenedorTitulo">   
           
                 
                {/* <h2   id="texto">.Portafolio.</h2>  */}
                {/* <h2   id="texto">De</h2>   */}
                      
              {/* <FontAwesomeIcon  id='corona' icon={faCrown} /> <br></br>                             */}


                <h2 id="nombre" className="texto">Ricardo</h2>          
                <h2 id="apellido" className="texto">Gonzalez Ramirez</h2>   

                {/* <p className="efectoFrontend">DESARROLLADOR FRONTEND</p>   
                                     */}
              <br></br>
              <span id="textoSeparado">    {d}</span>
              <span id="textoSeparado">    {e}</span>
              <span id="textoSeparado">    {s}</span>        
              <span className="casiDañada">{a}</span>
              <span id="textoSeparado">    {r}</span>
              <span id="textoSeparado">    {r}</span>
              <span id="textoSeparado">    {o}</span>
              <span id="textoSeparado">    {l}</span>
              <span id="textoSeparado">    {l}</span>
              <span id="textoSeparado">    {a}</span>
              <span id="textoSeparado">    {dd}</span>
              <span id="textoSeparado">    {o}</span>
              <span id="textoSeparado">    {r}</span>
              <br></br>
              <span id="textoSeparado">    {f}</span>
              <span id="textoSeparado">    {r}</span>
              <span id="textoSeparado">    {o}</span>
              <span id="textoSeparado">    {n}</span>
              <span id="textoSeparado">    {t}</span>
              <span id="textoSeparado">    {e}</span>
              <span id="textoSeparado">    {n}</span>
              <span  className="encender2 dañado">{dd}</span>
        
            </div>
        </div>   
     )
}
