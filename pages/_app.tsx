import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>섹스 신청서</title>
        <meta name="description" content="섹스 신청서" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/frontend/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
