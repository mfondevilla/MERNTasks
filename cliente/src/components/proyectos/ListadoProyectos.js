import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {
    const proyectos = [
        {nombre: 'tieneda virtual'},
        {nombre: 'intranet'},
        {nombre: 'diseño web'},
    ]

    return ( 
        <ul className = "listado-proyectos">
          { proyectos.map(proy =>(
              <Proyecto
                    proyecto = {proy}
              />
          )) }
        </ul>
     );
}
 
export default ListadoProyectos;