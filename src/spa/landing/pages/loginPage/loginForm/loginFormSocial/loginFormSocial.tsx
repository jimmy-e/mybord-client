import * as React from 'react';
import { useLoginContext } from 'landing/pages/loginPage/loginContext/loginContext';
import LoginFormLoginSocial from './loginFormLoginSocial';
import LoginFormSignUpSocial from './loginFormSignUpSocial';

const LoginFormSocial: React.FC = () => {
  const { formStatus } = useLoginContext();

  switch (formStatus) {
    case 'forgot':
      return null;
    case 'login':
      return <LoginFormLoginSocial />;
    case 'signUp':
      return <LoginFormSignUpSocial />;
    default:
      throw new Error('Unexpected form status');
  }
};

export default LoginFormSocial;