
import { IonApp, IonRouterOutlet, setupIonicReact, IonContent,
          IonHeader, IonPage, IonTitle, IonFooter, IonToolbar } from '@ionic/react';
import Pantalla from './components/Pantalla';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import BotonEquals from './components/BotonEquals';
import BotonMemoria from './components/BotonMemoria';
import {useState} from 'react';
import {evaluate} from 'mathjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faClockRotateLeft, faArrowUpRightFromSquare, faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import AcercaDe from './components/AcercaDe';
import Historial from './components/Historial';

import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

var inicioPantalla = true;
var expresionCompleta = true;

const App: React.FC = () => {
  const [input, setInput] = useState('0');
  const [inputPrevio, setInputPrevio] = useState('');
  const [expresion, setExpresion] = useState('');
  const [acercaDe, setacercaDe] = useState (false);
  const [historial, setHistorial] = useState<string[]>([]);
  const [historialExpresiones, setHistorialExpresiones] = useState(false);
  const [memoryV, setMemoryV] = useState('0');


  const toggleHistorialExpresiones = () =>{setHistorialExpresiones((prevState) => !prevState)};
  
  const toggleacercaDe = () => {setacercaDe((prevState) => !prevState)};

  const agregarInput = (val:string) => {
    if(inicioPantalla){
      setInput (val);
      inicioPantalla = false;
    } else {
      if(input == '' && inputPrevio != ''){
        setInputPrevio(inputPrevio + val);

      } else {
        setInput(input + val);
        setInputPrevio(input + val);
      } 
    }

  };
  
  const calcularResultado = () => {
    if(input == '' && inputPrevio != ''){
      setInput(evaluate(input));
    } else {
        if (input){
          setInputPrevio(inputPrevio + "=");
          setInput(evaluate(input));
          let expr = inputPrevio + "=" + evaluate(input);
          updateExpresion(expr);
        }
    }

  };

  const updateExpresion = (expr: string) => {
    setExpresion(expr);
  };

  const agregarExpresion = () => {

    if(expresion != ''){
      setHistorial(historial => [...historial, expresion]);
      setExpresion('');
    } 
  };


  const calcularPotencia = () => {
    if(input){
      let expresionPotencia = input + "^2";
      setInput(evaluate(expresionPotencia));
    }
  };

  const calcularRaiz = () => {
    if(input){
      let expresionPotencia = input + "^(1/2)";
      setInput(evaluate(expresionPotencia));
    }
  }

  const calcularFraccion = () => {
    if(input){
      let exrpresionFraccion = "1 / " + input;
      setInput(evaluate(exrpresionFraccion));
    }
  };

  const calcularPorcentaje =() =>{
    if(input){
      let expresionFraccion = input + "%";
      setInput(evaluate(expresionFraccion));
    }
  };

  const usoC =() =>{
    setInput("0");
    setInputPrevio("");
    inicioPantalla = true;
  };

  const usoCE =() =>{
    setInput("0");
    inicioPantalla = true;
  };

  const usoBackspace = () => {
    let temp = input.slice(0,-1);
    setInput(temp);
    setInputPrevio(temp)
  };

  const hacerNegativo =() => {
    if(input){
      let inputNegativo = "-" + input;
      setInput(inputNegativo)
    }
  }

  
  return (
    <IonApp>
      <IonPage>
        <IonContent fullscreen>
          <div className="App">
            <div className="calculadora">
            <div className = 'encabezado'>   
                <div className="iconAbout" onClick={toggleacercaDe}>           
                  <FontAwesomeIcon icon={faBars}/>
                  <AcercaDe props={acercaDe}/>
                </div>
                <div id="estandar">
                  Estándar
                </div>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="iconTop"></FontAwesomeIcon>
                <div className="iconHistorial" onClick={toggleHistorialExpresiones}>
                <FontAwesomeIcon icon={faClockRotateLeft} onClick={agregarExpresion}></FontAwesomeIcon>
                <Historial visible={historialExpresiones} listaExpresiones={historial}/>
                </div>
            </div>
              <Pantalla inputPrevio ={inputPrevio} input={input}/>
              <div className='filaMemoria'>
                <BotonMemoria manejarMemoria = {() => setMemoryV("0")}>MC</BotonMemoria>
                <BotonMemoria manejarMemoria = {() => {setInput(memoryV); inicioPantalla = true;}}>MR</BotonMemoria>
                <BotonMemoria manejarMemoria = {() => setMemoryV(evaluate(input + "+" + memoryV))}>M+</BotonMemoria>
                <BotonMemoria manejarMemoria = {() => setMemoryV(evaluate(input + "-" + memoryV))}>M-</BotonMemoria>
                <BotonMemoria manejarMemoria = {() => setMemoryV(input)}>MS</BotonMemoria>
                <BotonMemoria manejarMemoria = {() => setInput(memoryV)}>Mv</BotonMemoria>
              </div>
              <div className='fila'>
                <Boton manejarClic={calcularPorcentaje}>%</Boton>
                <BotonClear manejarClear = {usoCE}> CE</BotonClear>
                <BotonClear manejarClear = {usoC}>C</BotonClear>
                <BotonClear manejarClear = {usoBackspace} ><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></BotonClear>
              </div>
              <div className='fila'>
                <Boton manejarClic={calcularFraccion}>1/x</Boton>
                <Boton manejarClic={calcularPotencia}>x <sup>2</sup></Boton>
                <Boton manejarClic={calcularRaiz}><sup>2</sup>√x</Boton>
                <Boton manejarClic={agregarInput}>/</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>7</Boton>
                <Boton manejarClic={agregarInput}>8</Boton>
                <Boton manejarClic={agregarInput}>9</Boton>
                <Boton manejarClic={agregarInput}>*</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>4</Boton>
                <Boton manejarClic={agregarInput}>5</Boton>
                <Boton manejarClic={agregarInput}>6</Boton>
                <Boton manejarClic={agregarInput}>-</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={agregarInput}>1</Boton>
                <Boton manejarClic={agregarInput}>2</Boton>
                <Boton manejarClic={agregarInput}>3</Boton>
                <Boton manejarClic={agregarInput}>+</Boton>
              </div>
              <div className='fila'>
                <Boton manejarClic={hacerNegativo}>+/-</Boton>
                <Boton manejarClic={agregarInput}>0</Boton>
                <Boton manejarClic={agregarInput}>.</Boton>
                <BotonEquals manejarClic={calcularResultado}>=</BotonEquals>
              </div>

              
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  )
};

export default App;
