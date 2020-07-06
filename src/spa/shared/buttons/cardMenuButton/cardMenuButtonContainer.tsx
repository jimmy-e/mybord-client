import * as React from 'react';
import PopOver from 'modals/popOverTwo/popOverTwo';
import { UserCard } from 'schema/card';
import CardMenuButtonContentContainer from './cardMenuButtonContent/cardMenuButtonContentContainer';
import CardMenuButtonComponent from './cardMenuButtonComponent';
import * as styles from './cardMenuButton.module.less';

interface Props {
  userCard: UserCard;
}

const CardMenuButtonContainer: React.FC<Props> = ({ userCard }) => (
  <PopOver Content={<CardMenuButtonContentContainer userCard={userCard} />}>
    <div className={[styles.div, 'card-menu-button'].join(' ')}>
      <div className={styles.dot} />
      <div className={styles.dot} />
      <div className={styles.dot} />
    </div>
  </PopOver>
);

export default CardMenuButtonContainer;
