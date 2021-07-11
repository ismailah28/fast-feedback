import { ProvideAuth } from '@/lib/auth';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "@/styles/theme";
import Navbar from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} >
      <ProvideAuth >
        <Navbar />
        <Component {...pageProps} />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default MyApp;
