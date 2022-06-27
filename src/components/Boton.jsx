import React from 'react';
import './Boton.css';

function Boton(props){
    const esOperador = () => {
        const valor = props.children;
        if(valor == "+/-")
            return '';
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
        
    };

    return(
        <div className={`boton ${esOperador() ? 'operador' : ''}`.trimEnd()}
            onClick={() =>props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
}

export default Boton;