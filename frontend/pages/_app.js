import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider>
    //   <Component {...pageProps} />
    // </ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
