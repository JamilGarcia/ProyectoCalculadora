import React from 'react';
import './BotonMemoria.css';


const BotonMemoria = (props) => (
    <div className="botonM" onClick={props.manejarMemoria}>
        {props.children}
    </div>
);

export default BotonMemoria;