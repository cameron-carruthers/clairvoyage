import { createGlobalStyle, keyframes } from 'styled-components';
import { primaryLight, secondaryLight } from './colors';

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: Open Sans, sans-serif;
    background: linear-gradient(300deg,${primaryLight},${secondaryLight},${primaryLight});
    background-size: 180% 180%;
    background-attachment: fixed;
    background-position: center;
    animation: ${GradientAnimation} 18s ease infinite;
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  #app {
    height: 100%;
    width: 100%;
  }
`