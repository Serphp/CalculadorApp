import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import { evaluate } from 'mathjs';
import './Tab2.sass';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [pantalla, setPantalla] = useState<string>('');
  //const [acumulado, setAcumulado] = useState<number>(NaN);

  const agregarNumero = (numero: string) => {
    setPantalla(pantalla + numero);
  };

  const realizarOperacion = (operador: string) => {
    if (operador === '=') {
      // Realizar cálculo
      try {
        const resultado = evaluate(pantalla);
        setPantalla(resultado.toString());
      } catch (error) {
        setPantalla('Error');
      }
    } else if (operador === 'C') {
      // Limpiar pantalla
      setPantalla('');
    } else {
      // Agregar operador a pantalla
      setPantalla(pantalla + operador);
    }
  };
  



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <section className="hero">
        <div className="calculator">
          <div className="display">{pantalla}</div>
          <div className="keyboard">
            <div className='__row'>
            <button className='key' onClick={() => agregarNumero('7')}>7</button>
            <button className='key' onClick={() => agregarNumero('8')}>8</button>
            <button className='key' onClick={() => agregarNumero('9')}>9</button>
            <button className='key' onClick={() => realizarOperacion('/')}>/</button>
            </div>
          </div>
          <div className="fila">

            <button className='key' onClick={() => agregarNumero('4')}>4</button>
            <button className='key' onClick={() => agregarNumero('5')}>5</button>
            <button className='key' onClick={() => agregarNumero('6')}>6</button>
            <button className='key' onClick={() => realizarOperacion('*')}>*</button>

          </div>
          <div className="fila">
            <button className='key' onClick={() => agregarNumero('1')}>1</button>
            <button className='key' onClick={() => agregarNumero('2')}>2</button>
            <button className='key' onClick={() => agregarNumero('3')}>3</button>
            <button className='key' onClick={() => realizarOperacion('-')}>-</button>
          </div>
          <div className="fila">
            <button className='key' onClick={() => agregarNumero('0')}>0</button>
            <button className='key' onClick={() => agregarNumero('.')}>.</button>
            <button className='key' onClick={() => realizarOperacion('+')}>+</button>
            <button className='key' onClick={() => setPantalla('')}>C</button>
          </div>

          <div className="fila">
            <IonButton expand="full" onClick={() => realizarOperacion('=')}>
              =
            </IonButton>
          </div>
        </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
