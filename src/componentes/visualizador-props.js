import { useState } from "react";
import './visualizador-props.css';

//este componente muestra las tareas
function Tareas(){
    let [tareas,setTareas]= useState(['Lectura de obra de teatro','Poesias de decker','Ejercicios ']) 
    // const [estilo, setEstilo] = useState({
    //    'background-color': 'greenyellow',
    //     'color': 'blue',
    //     'list-style':'none',
    //     'margin': '10px 0px 5px',
    //     'padding':'5px',
    //     'border-radius': '5px',
    //     'height': '30px',
    //     'font-weight': 'bold',
    //     'text-decoration':'none'
          
    // });

    const agregar=()=>{
        let tarea=document.getElementById('tarea')
        setTareas(
            tareas=[...tareas,tarea.value]
        )
        tarea.value="";
    }
    const borrar=(indice)=>{
        setTareas(
        tareas.filter((_,index)=>(index!== indice))
       )

    }
  

    // const cambiarEstilo = () => {
    // setEstilo({
    //    'text-decoration': estilo.'text-decoration' : 'none' ? 'overline' : 'none'
    //     });
    // };

//en el li style={estilo} onClick={cambiarEstilo}

  
    return(
        <>
        <div className = "contenedor">
               <h1>Lista de tareas</h1>
               <div className="encabezado">
                    <label htmlFor="tarea">Tarea:</label>
                    <input type="text" id="tarea"></input>
                    <button  onClick={agregar}>Agregar</button> 
                </div>
                <ul>
                    {tareas.map( (tarea,indice )=>(
                        <li  key={indice}>{tarea}<button className="btnborrar" onClick={()=>borrar(indice)}>Borrar</button></li>
                    ))}
                </ul>
              </div>
         </>
    );
}
export default Tareas;