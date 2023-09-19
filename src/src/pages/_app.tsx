import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// Components
import Navbar from '../../components/General/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
