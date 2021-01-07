import * as React from 'react';
import Button from '../button';
import * as styles from 'storybook/storybook.module.less';

const ButtonStory: React.FC = () => {
  const [isWaiting, setIsWaiting] = React.useState(false);

  return (
    <>
      <h3 className={styles.h3}>-- Primary Button --</h3>
      <Button label="Primary Button" onClick={() => {}} />
      <h3 className={styles.h3}>-- Secondary Button --</h3>
      <Button label="Secondary Button" onClick={() => {}} type="secondary" />
      <h3 className={styles.h3}>-- Tertiary Button --</h3>
      <Button label="Secondary Button" onClick={() => {}} type="tertiary" />
      <h3 className={styles.h3}>-- Small Button --</h3>
      <Button label="OK" onClick={() => {}} size="small" />
      <h3 className={styles.h3}>-- Spinning Button --</h3>
      <Button
        isWaiting={isWaiting}
        label="Loading Button"
        onClick={() => setIsWaiting(true)}
      />
    </>
  );
};

export default ButtonStory;