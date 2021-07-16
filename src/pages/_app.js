import Head from 'next/head'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import { store } from '../app/store'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: var(--background);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  :root {
    --primary: #455a64;
    --primary-light: #718792;
    --primary-dark: #1c313a;
    --on-primary: #ffffff;
    --on-primary-light: #000000;
    --on-primary-dark: #ffffff;
    --secondary: #7e57c2;
    --secondary-light: #b085f5;
    --secondary-dark: #4d2c91;
    --on-secondary: #ffffff;
    --on-secondary-light: #000000;
    --on-secondary-dark: #ffffff;
    --background: #f5f5f6;
    --surface: #e1e2e1;
  }
  html,
  body,
  body > div,
  main {
    height: 100%;
  }
`

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Head>
          <link href="/reset.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
