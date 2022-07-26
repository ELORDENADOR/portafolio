import React, { useState } from "react";
import "../css/AdministradorDeTareas.css";
import { nanoid } from "nanoid";

function AdministradorDeTareas(){

const [tarea,setTarea] = useState("");
const [tareas,setTareas] = useState([]);
const [modoEdicion,setModoEdicion] = useState(false);
const [id,setId] = useState("");
const [cantidadDetareas,setCantidadDeTareas] = useState(0);
const [completado,setCompletado] = useState(false);
const [idCompletado,setIdCompletado] = useState("");



const guardarTarea = (e) => {
e.preventDefault()
if(!tarea.trim()){
    alert("Digite Tarea")
    return
}

setTareas([
    ...tareas,
    {id: nanoid(10), tarea:tarea}
]);
setTarea("");

setCantidadDeTareas(
    cantidadDetareas  +1
)
}

const eliminar = (id) =>{
    const arregloFiltrado = tareas.filter(item => item.id !== id)
    setTareas(arregloFiltrado);
    setCantidadDeTareas(
        cantidadDetareas  - 1
    )
}

const editar = (item) =>{
    setModoEdicion(true);
    setTarea(item.tarea)
    setId(item.id)
}

const editarTarea = (e) =>{
    e.preventDefault() 
    const arregloEditado = tareas.map(item => item.id === id ? {id:id,tarea:tarea}:item)
    setTareas(arregloEditado);
    setTarea("");
    setModoEdicion(false);
    setId("")
}


    return(
       <div >
        <div>
           <p id='textoIndisponibilidadAT' >No es posible Mostrar el proyecto por que el dispostivo no cumple con el tamaño apropiado</p>
         </div>

        <div className="contenedorPrincipal">
                <div>

                    <h1 className="titulos Tituloprincipal" >Administrador de Tareas</h1>
                   

                        <form  onSubmit=
                          {
                           modoEdicion ?  editarTarea : guardarTarea
                            
                          }>
                            <input     
                            className="digitarTarea"  
                            type="text"
                            placeholder="Digite la Tarea"
                            onChange={e => setTarea(e.target.value)}
                            value={tarea}
                            />
                                                            
                      {
                          modoEdicion ? 
                          (<button className="guardar"  >Editar</button>)
                          :
                          (<button className="guardar"  >Guardar</button>)
                      }
                            
                        </form>
                </div>

                    {
                        modoEdicion ? <h2>Editar</h2> :  <h2 className="titulos"> {cantidadDetareas} Tareas</h2>
                    }                

           {         
                tareas.map(item =>(                  
     
                    <div className="contenedorTareas" key={item.id}>

                            <div className="numero">                            
                          
                            </div>

                            <div className="contenedor1">                     
                              {item.tarea} 
                            </div>           
                                                                
                            <div className="contenedor2">
                                    <button className="eliminar" onClick={() => eliminar(item.id)}>X</button>
                                
                            </div>
                                
                            <div className="contenedor3">
                                    <button className="actualizar" onClick={() => editar(item)}>Editar</button>
                            </div>           
                            
                    </div>   

                ))                           
           }
          
        </div>
      </div>
    )
}

export default AdministradorDeTareas;