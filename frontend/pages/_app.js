import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import './walkthrough.css'
import './App.css'
import TagManager from 'react-gtm-module'
import {MapStyleProvider} from '../components/MapStyleContext'

function MyApp({ Component, pageProps }) {
  // Import our Google Tag Manager ID, this is found on Google Tag Manager's Dashboard
  //Import Google Tag Manager so we can use the Walkthrough functions
  const tagManagerArgs = {
    gtmId: 'GTM-K6FCPNV'
}

// Google Tag Mangager renders on client load, so we have to make sure we run TagManager AFTER the website has been rendered NOT before. Or it will not work
if (process.browser) {
  TagManager.initialize(tagManagerArgs);
}

// Map style provider is passing props from MapStyleContext to the rest of our app.
  return (
    <MapStyleProvider>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </MapStyleProvider>
  );
}

export default MyApp;
