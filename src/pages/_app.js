import { nextReduxWrapper } from '../app/store'
import '../styles/globals.css'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />
}
const WrappedApp = nextReduxWrapper.withRedux(MyApp)

export default WrappedApp
