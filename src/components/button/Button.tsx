import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
  type MantineColor,
} from '@mantine/core';
import type React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle';

export interface ButtonPropsExtended
  extends Omit<MantineButtonProps, 'variant' | 'color' | 'onClick'> {
  variant?: ButtonVariant;
  tone?: MantineColor;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}


export function Button({
  variant = 'primary',
  tone = 'brand',
  children,
  ...rest
}: ButtonPropsExtended) {
  if (variant === 'secondary') {
    return (
      <MantineButton variant="outline" color={tone} {...rest}>
        {children}
      </MantineButton>
    );
  }

  if (variant === 'subtle') {
    return (
      <MantineButton variant="light" color={tone} {...rest}>
        {children}
      </MantineButton>
    );
  }

  return (
    <MantineButton color={tone} {...rest}>
      {children}
    </MantineButton>
  );
}
