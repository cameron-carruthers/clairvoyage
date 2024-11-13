import React from 'react';
import { GlobalStyle } from '../src/theme';

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
};

export default preview;