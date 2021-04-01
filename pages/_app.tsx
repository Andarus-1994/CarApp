import "../styles/globals.css";
import { createGlobalStyle } from "styled-components";

function MyApp({ Component, pageProps }) {
  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x:hidden;
   
  }
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
