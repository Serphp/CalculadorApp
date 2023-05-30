import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';

import './Tab2.sass';
import { useContext, useState } from 'react';
import { CalContext } from '../context/CalculadoraContext';

const Tab2: React.FC = () => {
  const { agregarNumero, realizarOperacion, pantalla, setPantalla } = useContext(CalContext);

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
            <button className='total' onClick={() => realizarOperacion('=')}>
              =
            </button>
          </div>
        </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
