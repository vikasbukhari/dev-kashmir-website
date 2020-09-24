import '../styles/globals.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'


function MyApp({ Component, pageProps }) {
  library.add(fab)
  return <Component {...pageProps} />
}

export default MyApp
