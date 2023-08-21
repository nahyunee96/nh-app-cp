import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef, useEffect } from "react"
import { Inter } from 'next/font/google'
import styles from '../styles/scroll.module.scss'

const inter = Inter({ subsets: ['latin'] })

//function Sub() {
const Sub: React.FC = () => {
  const boxRef = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    var frame_count  = 17,
    offset_value = 316;

    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        backgroundPosition: (-offset_value * frame_count) + "px 50%",
        ease: "steps(" + frame_count + ")", // use a stepped ease for the sprite sheet
        scrollTrigger: {
          trigger: "#sticky",
          start: "-50% top",
          end: "+=" + (frame_count * offset_value),
          pin: true,
          scrub: true,
          markers: true,
        }
      });
    }, );
    return () => ctx.revert();
  }, [])
//}

  return (
    <>
      
      <div className={styles.section}></div>

      <div id="sticky"
        className={`${styles.scene} scene h-full w-full bg-current`}
      >
        <div ref={boxRef} className={`${styles.viewer} viewer mx-auto w-full h-full`}></div>
      </div>

      <div className={styles.section}></div>

    </>
  )
}



export default Sub
