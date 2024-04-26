import { useState, useCallback } from 'react';

// Hook para manejar el estado de carga (loading)
export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Función para iniciar la carga
  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  // Función para terminar la carga
  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};
