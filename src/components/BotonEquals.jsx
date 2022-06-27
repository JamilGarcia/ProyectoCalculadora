import React from 'react';
import './BotonEquals.css';


const BotonEquals = (props) => {
    return(
        <div className="resultado" onClick={props.manejarClic}>
            {props.children}
        </div>
    )
    
};

export default BotonEquals;