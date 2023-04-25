import { IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  //IonIcon,
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle
 } from '@ionic/react';

import ExploreContainer from '../components/ExploreContainer';
//import { heart } from 'ionicons/icons';
import './Tab1.css';
import { useState } from 'react';

const Tab1: React.FC = () => {
  const [pantalla, setPantalla] = useState<string>('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"> Home </IonTitle>
          </IonToolbar>
        </IonHeader>

        <ExploreContainer name=" Serphp " />

        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        
      <div>
      <p>Pantalla: {pantalla}</p>
      <button onClick={() => setPantalla('Nueva pantalla')}>Cambiar pantalla</button>
      </div>

      </IonCardContent>
      </IonCard>

      {/* <IonIcon aria-hidden="true" class='water' icon={heart} /> */}

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
