import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }: AppProps) => {


  useEffect(() => {
    if (typeof window !== 'undefined') {

      const setVh = (): void => {
        const vh = window.innerHeight
        document.documentElement.style.setProperty('--vh', `${vh}px`)
      }
      
      window.addEventListener('resize', setVh)

      return () => {
        window.removeEventListener('resize', setVh)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>nahyun ♥</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp