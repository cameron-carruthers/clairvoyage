import type { AppProps } from 'next/app';
import { GlobalStyle } from '../src/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
      <GlobalStyle />
      <Component {...pageProps} />
  </>
)

export default MyApp;
