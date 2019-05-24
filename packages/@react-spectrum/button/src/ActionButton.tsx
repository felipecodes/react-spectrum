import {classNames} from '@react-spectrum/utils/src/classNames';
import {cloneIcon} from '@react/react-spectrum/utils/icon';
// @ts-ignore
import CornerTriangle from '../../../../src/Icon/core/CornerTriangle';
import filterDOMProps from '@react-spectrum/utils/src/filterDOMProps';
import React from 'react';
import styles from '@adobe/spectrum-css-temp/components/button/vars.css';
import {useButton} from '@react-aria/button';

import {ButtonBase} from './Button';

export interface ActionButtonProps extends ButtonBase {
  isQuiet?: boolean,
  isSelected?: boolean,
  holdAffordance?: boolean
}

export function ActionButton(props: ActionButtonProps) {
  let {
    elementType: ElementType = 'button',
    isQuiet,
    isSelected,
    isDisabled,
    icon,
    className,
    children,
    holdAffordance,
    ...otherProps
  } = props;
  let {buttonProps} = useButton(props);

  return (
    <ElementType
      {...filterDOMProps(otherProps)}
      {...buttonProps}
      className={
        classNames(
          styles,
          'spectrum-ActionButton',
          {
            'spectrum-ActionButton--quiet': isQuiet,
            'is-selected': isSelected,
            'is-disabled': isDisabled
          },
          className
        )
      }>
      {cloneIcon(icon, {size: 'S'})}
      <span className={classNames(styles, 'spectrum-Button-label')}>{children}</span>
      {holdAffordance &&
      <CornerTriangle role="presentation" size={null} className={classNames(styles, 'spectrum-Tool-hold')} />
      }
    </ElementType>
  );
}
