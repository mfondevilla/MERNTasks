import React from 'react';

const FormTarea = () => {
    return ( 
        <div className = "formulario">
            <form>
                <div className = "contenedor-input">
                    <input 
                        type = "text"
                        className = "input-text"
                        placeholder = "Nombre de la tarea..."
                        name = "nombre"
                    />
                </div>
                <div className = "contendor-input">
                    <input 
                        type = "submit"
                        className = "btn btn-primario btn-sumbit btn-block"
                        value = "Agregar tarea"
                    />


                </div>
            </form>
        </div>
    );
}
 
export default FormTarea;