import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <Script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" />  
    </Head>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider></>
  )
}

export default MyApp