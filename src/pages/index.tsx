import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import { Inter } from 'next/font/google'
import styles from '../styles/main.module.scss'

const inter = Inter({ subsets: ['latin'] })

function Home() {

  const app = useRef<HTMLDivElement>(null);

  useEffect(() => {

    gsap.to(app.current, { rotate: 360, duration: 5 })

  }, [])

  return (
    <main
      className={styles.main__layout}
    >
     

      
    </main>
  )
}

export default Home
