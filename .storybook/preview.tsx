// .storybook/preview.tsx
import '@mantine/core/styles.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { DSProvider } from '../src/design-system/DSProvider';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      expanded: true,
    },
  },
  decorators: [
    (Story, context) => (
      <DSProvider mode="light">
        <div style={{ padding: 24 }}>
          <Story {...context} />
        </div>
      </DSProvider>
    ),
  ],
};

export default preview;
