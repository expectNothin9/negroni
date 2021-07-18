import { nextReduxWrapper } from '../app/store'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
const WrappedApp = nextReduxWrapper.withRedux(MyApp)

export default WrappedApp
