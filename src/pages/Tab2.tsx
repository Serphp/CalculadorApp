import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [pantalla, setPantalla] = useState<string>('');
  const [acumulado, setAcumulado] = useState<string>('');

  const agregarNumero = (numero: string) => {
    setPantalla(pantalla + numero);
  };

  const realizarOperacion = (operador: string) => {
    // Si no hay nada en pantalla, no hacemos nada
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculadora</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="calculadora">
          <div className="pantalla">{pantalla}</div>
          <div className="fila">
            <IonButton onClick={() => agregarNumero('7')}>7</IonButton>
            <IonButton onClick={() => agregarNumero('8')}>8</IonButton>
            <IonButton onClick={() => agregarNumero('9')}>9</IonButton>
            <IonButton onClick={() => realizarOperacion('/')}>/</IonButton>
          </div>
          <div className="fila">
            <IonButton onClick={() => agregarNumero('4')}>4</IonButton>
            <IonButton onClick={() => agregarNumero('5')}>5</IonButton>
            <IonButton onClick={() => agregarNumero('6')}>6</IonButton>
            <IonButton onClick={() => realizarOperacion('*')}>*</IonButton>
          </div>
          <div className="fila">
            <IonButton onClick={() => agregarNumero('1')}>1</IonButton>
            <IonButton onClick={() => agregarNumero('2')}>2</IonButton>
            <IonButton onClick={() => agregarNumero('3')}>3</IonButton>
            <IonButton onClick={() => realizarOperacion('-')}>-</IonButton>
          </div>
          <div className="fila">
            <IonButton onClick={() => agregarNumero('0')}>0</IonButton>
            <IonButton onClick={() => agregarNumero('.')}>.</IonButton>
            <IonButton onClick={() => realizarOperacion('+')}>+</IonButton>
            <IonButton onClick={() => setPantalla('')}>C</IonButton>
          </div>
          <div className="fila">
            <IonButton expand="full" onClick={() => realizarOperacion('=')}>
              =
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
