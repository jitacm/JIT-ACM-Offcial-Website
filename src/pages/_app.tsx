import type { AppProps } from 'next/app';
import '../index.css';
import '../components/GridScan.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
