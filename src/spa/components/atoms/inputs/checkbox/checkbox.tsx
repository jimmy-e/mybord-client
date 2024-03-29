import * as React from 'react';
import * as styles from './checkbox.module.less';

interface Props {
  checked: boolean;
  disabled?: boolean;
  label?: string;
  onClick: () => void;
}

const Checkbox: React.FC<Props> = ({
  checked,
  disabled = false,
  label = null,
  onClick,
}) => (
  <div
    aria-checked={checked}
    aria-disabled={disabled}
    className={[
      styles.divContainer,
      disabled ? styles.disabledDivContainer : styles.enabledDivContainer,
    ].join(' ')}
    onClick={onClick}
    onKeyPress={onClick}
    role="checkbox"
    tabIndex={0}
  >
    <div
      className={[
        styles.checkbox,
        checked ? styles.checked : styles.unchecked,
        disabled ? styles[`disabled-${checked ? 'checked' : 'unchecked'}`] : undefined,
      ].join(' ')}
    >
      <svg
        className={[
          styles.svg,
          checked ? styles.svgVisible : styles.svgHidden,
        ].join(' ')}
        fill="none"
        height="11"
        viewBox="0 0 13 11"
        width="13"
      >
        <path
          d="M2 6.27778L4.73913 9L11 2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </div>
    {
      label && <p className={styles.p}>{label}</p>
    }
  </div>
);

export default Checkbox;
