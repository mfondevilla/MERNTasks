import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';

const Sidebar = () => {
    return (
        <sidebar>
            <h1>MERN<span>Tasks</span></h1>
            <NuevoProyecto/>
            <div className = "proyectos">
                <h2>Tus proyectos</h2>
            </div>
            
        </sidebar>
      );
}
 
export default Sidebar;