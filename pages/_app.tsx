import Navbar from '../components/Navbar';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '../styles/Home.module.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;