import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'components/containers';
import 'styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=5, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
