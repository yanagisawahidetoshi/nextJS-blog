import type { AppProps } from "next/app";
import "modern-css-reset/dist/reset.min.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "ThemeConfig";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
