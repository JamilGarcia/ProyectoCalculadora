
import './AcercaDe.css';

const AcercaDe = ({props}) => (
        <div className={props ? "ventanaAD ventanaAD--open" : "ventanaAD"}>
                Calculadora 1.0 <br />
                © 2021 | Grupo #1 UX <br />
                Todos los derechos reservados.
                <br /> <br />
                Autores  <br />
                Jamil Garcia y Miguel Rojas 
                <br />
                Clase: Experiencia de Usuario 1808 <br />
                Fecha: 27/ 06/ 2022
        </div>
);


export default AcercaDe;