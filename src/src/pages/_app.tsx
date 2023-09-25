import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

// Components
import Navbar from '../../components/General/Navbar'

let meta = {
  title: "Dev's Café Community",
  favicon: "/favicon.png",
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" href={meta.favicon} />
      </Head>
      
      <Navbar />
      <div className="h-40"></div>
      <Component {...pageProps} />
    </div>
  )
}