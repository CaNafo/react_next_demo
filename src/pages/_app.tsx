import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Provider as AppProvider } from "../context/ApiContext";

import "../localization/i18n";

import Head from "next/head";
import { theme } from "styles/theme";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  let appTheme = {
    ...theme,
    colors: {
      ...theme.colors,
    },
  };
  return (
    <>
      <Head>
        {/* <meta name="viewport" content="viewport-fit=cover" /> */}
        <title>Demo App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools key="react-query-devtools" initialIsOpen={false} />
        <AppProvider key="rootAppProvider">
          <ChakraProvider key="chakra-ui" theme={appTheme}>
            <Component key="rootComponent" {...pageProps} />
          </ChakraProvider>
        </AppProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
