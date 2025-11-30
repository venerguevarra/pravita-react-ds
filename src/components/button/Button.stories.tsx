import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], // 👈 enables DocsPage + auto props table
  args: {
    children: 'Click me',
    variant: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'subtle'],
      description: 'Design-system variant for the button',
    },
    tone: {
      control: 'text',
      description: 'Color tone (maps to Mantine color)',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The design system Button wraps MantineButton and exposes a simplified, DS-friendly API.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};
