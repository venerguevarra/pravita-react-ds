import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
  type MantineColor,
} from '@mantine/core';

export type ButtonVariant = 'primary' | 'secondary' | 'subtle';

/**
 * Props for the design system Button component.
 * Wraps Mantine's Button but exposes a simplified, DS-friendly API.
 */
export interface ButtonPropsExtended
  extends Omit<MantineButtonProps, 'variant' | 'color'> {
  /**
   * Design-system level variant.
   *
   * - `primary`: filled brand button
   * - `secondary`: outline button
   * - `subtle`: light / ghost-style button
   */
  variant?: ButtonVariant;

  /**
   * Tone maps to Mantine's `color` prop.
   * Defaults to the design system primary color, `"brand"`.
   */
  tone?: MantineColor;
}

export function Button(props: ButtonPropsExtended) {
  const {
    variant = 'primary',
    tone = 'brand',
    children,
    ...rest
  } = props;

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

  // primary
  return (
    <MantineButton color={tone} {...rest}>
      {children}
    </MantineButton>
  );
}
