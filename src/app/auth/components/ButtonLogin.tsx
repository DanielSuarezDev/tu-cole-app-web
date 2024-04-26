"use client";

import { Button } from '@/components/Button';
import useAuth from '@/hooks/useAuth';

export const ButtonLogin = () => {
  const {loginWithGoogle, user} = useAuth();

  console.log('user', user);

  return (
    <Button type="button" fullWidth onClick={loginWithGoogle} otherClass='flex justify-center items-center gap-2'>
      Iniciar sesión con Google
    </Button>
  )
}

