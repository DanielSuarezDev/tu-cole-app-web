'use client';

import React, { createContext, useContext, useCallback, useMemo } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IToastContext {
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warn: (message: string) => void;
}

interface IToastProvider {
  children: React.ReactNode;
}

interface IToastOptions {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  autoClose?: number | false;
  hideProgressBar?: boolean;
  closeOnClick?: boolean;
  pauseOnHover?: boolean;
  draggable?: boolean;
  progress?: undefined | number;
  theme?: 'colored' | 'dark';
  icon?: boolean;
}

const ToastContext = createContext<IToastContext | null>(null);

const ToastProvider: React.FC<IToastProvider> = ({ children }) => {
  const toastOptions: IToastOptions = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    icon: false,
  };

  const success = useCallback((message: string) => {
    toast.success(message, toastOptions);
  }, []);

  const error = useCallback((message: string) => {
    toast.error(message, toastOptions);
  }, []);

  const info = useCallback((message: string) => {
    toast.info(message, toastOptions);
  }, []);

  const warn = useCallback((message: string) => {
    toast.warn(message, toastOptions);
  }, []);

  const Provider = useMemo(
    () => (
      <ToastContext.Provider value={{ success, error, info, warn }}>
        <ToastContainer />
        {children}
      </ToastContext.Provider>
    ),
    [children, success, error, info, warn],
  );

  return Provider;
};

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export default ToastProvider;
