import Navbar from '../components/Navbar'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return <div>
  <h1>Header</h1>
  <Navbar />
    <Component {...pageProps} />
    </div>
}
