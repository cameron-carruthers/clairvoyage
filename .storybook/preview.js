
import React from 'react';
import * as nextImage from 'next/image';
import { GlobalStyle } from '../src/theme';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: props => <img {...props} />
});

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
        <Story />
    </>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}