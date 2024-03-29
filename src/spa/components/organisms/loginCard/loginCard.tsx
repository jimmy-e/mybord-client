import * as React from 'react';
import LoginForm from 'forms/loginForm/loginForm';
import SignupForm from 'forms/signupForm/signupForm';
import Typography from 'typography/typography';
import logoWithType from 'graphics/logoWithType.png';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import { useLandingContext } from 'context/landingContext/landingContext';
import * as styles from './loginCard.module.less';

export type LoginStatus = 'login' | 'signup';

const LoginCard: React.FC = () => {
  const { headerRef } = useLandingContext();
  const [loginStatus, setLoginStatus] = React.useState<LoginStatus>('login');

  const handleClick = (): void => {
    setTimeout(() => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 100);
  };

  return (
    <div className={styles.containerDiv}>
      <div className={styles.logoDiv}>
        <img alt="MyBord logo" className={styles.img} src={logoWithType} />
      </div>
      { loginStatus === 'login' && <LoginForm handleSignup={() => setLoginStatus('signup')} /> }
      { loginStatus === 'signup' && <SignupForm handleBack={() => setLoginStatus('login')} /> }
      {/* <Typography */}
      {/*  text="About MyBord" */}
      {/*  link="/about" */}
      {/*  onClick={handleClick} */}
      {/* /> */}
    </div>
  );
};

export default pageWrapper(LoginCard);
