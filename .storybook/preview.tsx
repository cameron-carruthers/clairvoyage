import React from 'react';

import type { Preview } from '@storybook/react';

import "~/styles/global.css"

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <>
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
