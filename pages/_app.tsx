/* eslint-disable prettier/prettier */
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import { RecoilRoot } from "recoil";
import { theme } from "@/styles/theme";
const queryClient = new QueryClient();
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-datepicker/dist/react-datepicker.css';
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }
  return (
    <>
      {/* <head>
        <title>성원 푸드몰</title>
        <meta name="description" content="성원푸드" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width" />
      </head> */}
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
 
  );
}


