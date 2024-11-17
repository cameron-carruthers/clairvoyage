import React from 'react';
import { GlobalStyle } from '../app/theme';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <>
          <GlobalStyle />
          <Story />
        </>
      )
    }
  ],
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
      },
    },
  },
};

export default preview;