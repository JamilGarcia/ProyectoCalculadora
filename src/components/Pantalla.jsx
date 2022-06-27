import React from 'react';
import './Pantalla.css';

const Pantalla = (props) => {

    return (
        <div class = 'input'>
        <div class ='display'>
            <div class='NumerosPequeños'>{props.inputPrevio}</div>
            <div class='NumerosGrandes'>{props.input}</div>
        </div>
    </div>
    )
    
};

/*
const Pantalla = ({input}) => (
    <div class = 'input'>
        
        <div class = 'display'>
            <div class = 'NumerosPequeños'>{input}</div>
            <div class = 'NumerosGrandes' >{input}</div>
        </div>
        
    </div>
    /*
    <div className = 'input'>
        {input}
    </div>
    <div class = 'toolbar'>

        </div>
    
);*/

export default Pantalla;