import React from 'react';

const Tarea = ({tarea}) => {
    const  {nombre} = tarea;
    return (  
        <li className = "tarea sombra">
            <p>{nombre}</p>
            <div className = "estado">
                {
                    tarea.estado
                    ?
                    (  
                    <button
                        type="button"
                        className ="completo"
                    >
                        Completada
                    </button>
                    )
                    :
                    (  
                        <button
                            type="button"
                            className ="incompleto"
                        >
                            No completada
                        </button>
                    )
                }
            </div>
            <div className = "acciones">
                <button
                    type = "button"
                    className = "btn btn-primario"
                >Editar</button>
                <button
                    type = "button"
                    className = "btn btn-secundario"                
                >Eliminar</button>
            </div>
        </li>
        
    );
}
 
export default Tarea;