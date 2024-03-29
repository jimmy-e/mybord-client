import * as React from 'react';
import LottiePlayer from 'lottiePlayer/lottiePlayer';
import spinnerAnimation from 'lotties/spinner.json';
import * as styles from './spinner.module.less';

const Spinner: React.FC = () => (
  <div className={styles.div}>
    <LottiePlayer
      animationData={spinnerAnimation}
      autoplay
      loop
      size={250}
    />
  </div>
);

export default Spinner;
