import { createGlobalStyle, ThemeProvider, keyframes } from 'styled-components';
import type { AppProps } from 'next/app';
import { headingOne, primaryLight, secondaryLight } from '../src/theme';

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

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Open Sans, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(300deg,${primaryLight},${secondaryLight},${primaryLight});
    background-size: 180% 180%;
    animation: ${GradientAnimation} 18s ease infinite;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default MyApp;
