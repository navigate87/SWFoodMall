/* eslint-disable prettier/prettier */
import type { AppProps } from "next/app";
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/globalStyle";
import { RecoilRoot } from "recoil";
import { theme } from "@/styles/theme";
const queryClient = new QueryClient();

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
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
