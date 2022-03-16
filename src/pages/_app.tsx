import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import {PageLayout} from "../layouts/PageLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider>
          <PageLayout>
              <Component {...pageProps} />
          </PageLayout>
      </ChakraProvider>
  )
}

export default MyApp
