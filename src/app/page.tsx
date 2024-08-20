import React from 'react';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Main from '@/components/Main';

function Page() {
  return (
    <div>
      <Head>
        <title>The Charted Institute Of Bankers Of Nigeria</title>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Page;
