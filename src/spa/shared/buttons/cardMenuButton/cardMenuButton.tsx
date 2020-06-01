import * as React from 'react';
import Popover from 'modals/popover/popover';
import CardMenuButtonContent from './cardMenuButtonContent';
import * as styles from './cardMenuButton.module.less';

const CardMenuButton: React.FC = () => {
  // const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(true);
  const overlayRef = React.useRef(null);
  const toggleMenu = (): void => setShowMenu((prevState) => !prevState);
  const handleMouseOut = (): void => setShowMenu(false);

  React.useEffect(() => {
    if (overlayRef.current) {
      // overlayRef.current.addEventListener('mouseout', handleMouseOut);
    }
  }, [overlayRef, showMenu]);

  // const buttonClassName = showMenu ? 'card-menu-button-show' : 'card-menu-button';
  const buttonClassName = 'card-menu-button-show';

  return (
    <Popover Content={CardMenuButtonContent} show={showMenu}>
      <div className={styles.overlay} ref={overlayRef} />
      <div className={styles.popover} />
      <button
        className={[styles.button, buttonClassName].join(' ')}
        onClick={toggleMenu}
        type="button"
      >
        <div className={styles.div}>
          <div className={styles.dot} />
          <div className={styles.dot} />
          <div className={styles.dot} />
        </div>
      </button>
    </Popover>
  );
};

export default CardMenuButton;
