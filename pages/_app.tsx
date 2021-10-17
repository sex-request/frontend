import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="섹스 신청서" />

        <link rel="manifest" href="manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/frontend/favicon.ico" />

        <title>섹스 신청서</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default App;
