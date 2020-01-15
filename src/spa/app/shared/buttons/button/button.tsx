import * as React from 'react';
import { Button as AntButton } from 'antd';
import Icon from 'icons/icon/icon';
import { IconNames } from 'types/iconTypes';
import * as styles from './button.module.less';
import './button.less';

interface Props {
  iconName?: IconNames;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<Props> = ({
  iconName = null,
  label,
  onClick,
  type = 'primary',
}) => (
  <AntButton
    className={[styles.button, styles[type]].join(' ')}
    onClick={onClick}
    type={type === 'primary' ? 'primary' : null}
  >
    {
      iconName && <Icon iconName={iconName} size={16} />
    }
    {label}
  </AntButton>
);

export default Button;