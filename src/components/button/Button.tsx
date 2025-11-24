import {
  Button as MantineButton,
  type ButtonProps,
  type MantineColor,
} from "@mantine/core";

export type ButtonVariant = "primary" | "secondary" | "subtle";

export interface ButtonPropsExtended
  extends Omit<ButtonProps, "variant" | "color"> {
  variant?: ButtonVariant;
  tone?: MantineColor;
}

export function Button(props: ButtonPropsExtended) {
  const { variant = "primary", tone = "brand", children, ...rest } = props;

  if (variant === "secondary") {
    return (
      <MantineButton variant="outline" color={tone} {...rest}>
        {children}
      </MantineButton>
    );
  }

  if (variant === "subtle") {
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
