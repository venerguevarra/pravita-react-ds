import type { Meta, StoryObj } from '@storybook/react-vite';
import { DSProvider, type DSProviderProps } from './DSProvider';
import { Button } from '../components';
import { defaultTheme } from './tokens';

const meta: Meta<typeof DSProvider> = {
  title: 'Design System/Theming',
  component: DSProvider,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'DSProvider wires the Pravita theme tokens into Mantine and exposes color mode and theming to all components.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DSProvider>;

export const LightMode: Story = {
  name: 'Light mode',
  render: (args: DSProviderProps) => (
    <DSProvider {...args} mode="light">
      <div style={{ padding: 24 }}>
        <h3>Light theme</h3>
        <p>Using the default light theme tokens.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="subtle">Subtle</Button>
        </div>
      </div>
    </DSProvider>
  ),
  args: {
    theme: defaultTheme,
  },
};

export const DarkMode: Story = {
  name: 'Dark mode',
  render: (args: DSProviderProps) => (
    <DSProvider {...args} mode="dark">
      <div style={{ padding: 24 }}>
        <h3>Dark theme</h3>
        <p>Same tokens, but rendered in dark mode.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="subtle">Subtle</Button>
        </div>
      </div>
    </DSProvider>
  ),
  args: {
    theme: defaultTheme,
  },
};

// Example of how you might customize brand colors later
export const CustomBrand: Story = {
  name: 'Custom brand (example)',
  render: (args: DSProviderProps) => (
    <DSProvider {...args}>
      <div style={{ padding: 24 }}>
        <h3>Custom brand example</h3>
        <p>This is where you would plug in a per-tenant theme.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <Button tone="teal">Teal primary</Button>
          <Button variant="secondary" tone="grape">
            Grape secondary
          </Button>
        </div>
      </div>
    </DSProvider>
  ),
  args: {
    theme: defaultTheme,
    mode: 'light',
  },
};
