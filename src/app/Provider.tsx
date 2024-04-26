'use client';
import ToastProvider from '../context/toastContext';


const Providers = (props: React.PropsWithChildren) => {
  return (

    <ToastProvider>
      {props.children}
    </ToastProvider>

  );
};

export default Providers;
