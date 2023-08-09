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
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp