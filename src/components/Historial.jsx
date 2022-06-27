import './Historial.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const AcercaDe = (props) => (
    <div className={props.visible ? "vHistorial vHistorial--open" : "vHistorial"}>
        <div class ='display'>
            {props.listaExpresiones.map((expresion, index) =>{
                return (
                    <div class='NumerosGrandes' key={index}>{expresion}</div>
                )
            })}
        </div>
        <div class="basurero">
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
        </div>
    </div>
        
);


export default AcercaDe;