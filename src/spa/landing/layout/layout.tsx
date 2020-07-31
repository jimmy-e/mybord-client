import * as React from 'react';
import loginBackground from 'assets/pictures/loginBackgroundRoad.jpg';
import LoginForm from './loginForm/loginForm';
import * as styles from './layout.module.less';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <main className={styles.main}>
    <div className={styles.imgContainer}>
      <img
        alt="login-form-background"
        className={styles.img}
        src={loginBackground}
      />
      <LoginForm />
    </div>
    <section className={styles.section}>
      {children}
    </section>
  </main>
);

export default Layout;
