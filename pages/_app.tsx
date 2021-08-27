import React from 'react';
import Layout from '../src/components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
