import React, { createContext, useState, ReactNode } from 'react';

interface CalculationContextData {
  historial: string[];
  agregarCalculo: (calculo: string) => void;
}

export const CalculadoraContext = createContext<CalculationContextData>({
  historial: [],
  agregarCalculo: () => {},
});

interface CalculadoraProviderProps {
  children: ReactNode;
}

export const CalculadoraProvider: React.FC<CalculadoraProviderProps> = ({ children }) => {
  const [historial, setHistorial] = useState<string[]>([]);

  const agregarCalculo = (calculo: string) => {
    setHistorial([...historial, calculo]);
  };

  return (
    <CalculadoraContext.Provider value={{ historial, agregarCalculo }}>
      {children}
    </CalculadoraContext.Provider>
  );
};

export default CalculadoraContext;