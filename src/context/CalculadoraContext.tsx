import React, { createContext, useState, ReactNode } from 'react';
import { evaluate } from 'mathjs';

interface CalculationContextData {
  historial: string[];
  agregarCalculo: (calculo: string) => void;
  agregarNumero: (numero: string) => void;
  realizarOperacion: (operador: string) => void;
  pantalla: string;
  setPantalla: (pantalla: string) => void;
}

export const CalContext = createContext<CalculationContextData>({
  historial: [],
  agregarCalculo: () => {},
  agregarNumero: () => {},
  realizarOperacion: () => {},
  pantalla: '',
  setPantalla: () => {}
});

interface CalculadoraProviderProps {
  children: ReactNode;
}

export const CalculadoraProvider: React.FC<CalculadoraProviderProps> = ({ children }: any) => {
  const [historial, setHistorial] = useState<string[]>([]);
  const [pantalla, setPantalla] = useState<string>('');

  const agregarCalculo = (calculo: string) => {
    setHistorial([...historial, calculo]);
  };

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
        setPantalla('Error de calculo');
      }
    } else if (operador === 'C') {
      // Limpiar pantalla
      setPantalla('');
    } else {
      // Agregar operador a pantalla
      setPantalla(pantalla + operador);
    }
  };
  
  const value = {
    pantalla, setPantalla,
    historial, agregarNumero, realizarOperacion, agregarCalculo
  };

  return (
    <CalContext.Provider value={value}>
      {children}
    </CalContext.Provider>
  );
};

export default CalContext;