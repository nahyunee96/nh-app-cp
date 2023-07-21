import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-style'
import { theme } from '../styles/theme'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.onresize = () => {
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    }
  }, []);



  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default MyApp