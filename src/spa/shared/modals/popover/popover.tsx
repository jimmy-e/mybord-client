import * as React from 'react';
import { Popover as AntPopover } from 'antd';
import * as styles from './popover.module.less';
import './popover.less';

interface Props {
  content: React.ReactNode;
  children: React.ReactNode;
  hideTip?: boolean;
  overlayClassName?: string;
  placement?: 'bottom' | 'bottomLeft' | 'bottomRight' | 'top';
  title?: string;
  trigger?: 'hover' | 'focus' | 'click';
}

const Popover: React.FC<Props> = ({
  content,
  children,
  hideTip = false,
  overlayClassName = null,
  placement = 'top',
  title = null,
  trigger = 'click',
}) => (
  <AntPopover
    content={content}
    overlayClassName={[
      hideTip ? styles.hideTip : undefined,
      overlayClassName,
    ].join(' ')}
    placement={placement}
    title={title}
    trigger={trigger}
  >
    {children}
  </AntPopover>
);

export default Popover;