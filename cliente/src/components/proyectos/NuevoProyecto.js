import React, {Fragment, useState} from 'react';

const NuevoProyecto = () => {

    //state para proyecto
    const[proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //lee contenido
    const onChangeProyecto = e =>{
        guardarProyecto({
            ...proyecto,
            [e.target.name]:e.target.value
        });
    }

    //guardar proyecto
    const onSumbitProyecto = e =>{
        e.preventDefault();

        //validar el proyecto


        //agregar el stae

        //reiniciar el form

    }

    const{nombre} = proyecto;

    return ( 
        <Fragment>
            <button
                type = "button"
                className = "btn btn-block btn-primario"
            >
                Nuevo proyecto
            </button>
            <form 
                className = "formulario-nuevo-proyecto"
                onSumbit = {onSumbitProyecto}
            >
                <input 
                    type = "text"
                    className = "input-text"
                    placeholder = "Nombre proyecto"
                    name = "nombre"
                    value = {nombre}
                    onChange = {onChangeProyecto}
                />
                <input 
                    type = "submit"
                    className = "btn btn-block btn-primario"
                    value = "Agregar proyecto"
                />
                
            </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;