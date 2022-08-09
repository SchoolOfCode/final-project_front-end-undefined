import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import Layout from '../components/layout'


function MyApp({ Component, pageProps }) {
  return (
    
    <Layout >
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Layout>
  );
}

export default MyApp;
