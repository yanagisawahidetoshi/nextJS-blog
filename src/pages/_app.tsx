import type { AppProps } from "next/app";
import "modern-css-reset/dist/reset.min.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle``;

const theme = {
  colors: {
    primary: "#3498db",
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
