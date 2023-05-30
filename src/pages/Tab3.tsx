import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, 
  IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { CalContext } from '../context/CalculadoraContext';
import { useContext } from 'react';

const Tab3: React.FC = () => {

  const { historial } = useContext(CalContext);	

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Historial</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Historial</IonTitle>
          </IonToolbar>
        </IonHeader>

        
        <ExploreContainer name="Historial" />

        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        


      </IonCardContent>
      </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
