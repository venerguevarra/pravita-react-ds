// src/design-system/mantineTheme.ts

import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';
import type { DesignTokens } from './tokens';

export function createMantineThemeFromTokens(tokens: DesignTokens) {
  const brand = tokens.color.brand as unknown as MantineColorsTuple;
  const gray = tokens.color.neutral as unknown as MantineColorsTuple;

  return createTheme({
    colors: {
      brand,
      gray,
    },
    primaryColor: 'brand',
    fontFamily: tokens.typography.fontFamily,
    defaultRadius: 'md',
    radius: {
      xs: tokens.radius.xs,
      sm: tokens.radius.sm,
      md: tokens.radius.md,
      lg: tokens.radius.lg,
      xl: tokens.radius.xl,
    },
    spacing: {
      xs: tokens.spacing.xs,
      sm: tokens.spacing.sm,
      md: tokens.spacing.md,
      lg: tokens.spacing.lg,
      xl: tokens.spacing.xl,
    },
  });
}
