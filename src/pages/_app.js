import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
