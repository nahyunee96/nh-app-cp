import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
import { useRef, useEffect } from "react"
import { Inter } from 'next/font/google'
import styles from '../styles/scroll.module.scss'
import imagesLoaded from 'imagesloaded'

const inter = Inter({ subsets: ['latin'] })

//function Sub() {
const Sub: React.FC = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);;

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    var frame_count  = 17,
    offset_value = 316;

    const ctx = gsap.context(() => {
      gsap.to(boxRef.current, {
        backgroundPosition: (-offset_value * frame_count) + "px 50%",
        ease: "steps(" + frame_count + ")",
        scrollTrigger: {
          trigger: "#sticky",
          start: "-50% top",
          end: "+=" + (frame_count * offset_value),
          pin: true,
          scrub: true,
        }
      });
    }, );
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    const showDemo = () => {

      document.body.style.overflow = "auto";
      document.scrollingElement?.scrollTo(0, 0);

      gsap.utils.toArray<HTMLDivElement>("section").forEach((section, index) => {
        
        const w = section.querySelector(".wrapper") as HTMLDivElement | null;

        if (w) {
          const [x, xEnd] =
            index % 2
              ? ['100%', `${(w.scrollWidth - section.offsetWidth) * -1}px`]
              : [`${w.scrollWidth * -1}px`, '0'];
          gsap.fromTo(
            w,
            { x },
            {
              x: xEnd,
              scrollTrigger: {
                trigger: section,
                scrub: 0.2
              }
            }
          )
          }

      })
    }

    imagesLoaded(document.body, showDemo)
  }, [])


  return (
    <article className="overflow-x-hidden">
      <div className={`${styles.section} ${styles.head__section} flex justify-center items-center`}>
        <h2 className="text-cyan-300 text-7xl flex font-black leading-none">WELCOME TO THE WORLD OF CINAMOROLLS!</h2>
      </div>

      <section className={`${styles.section} ${styles.text__section} flex justify-center items-center `}>
        <h2 className="wrapper text-cyan-300 text-9xl flex font-black leading-none whitespace-nowrap">WELCOME TO THE WORLD OF CINAMOROLLS!</h2>
      </section>

      <section className={`${styles.section} ${styles.image__section}`}>
        <ul className={`${styles.wrapper} wrapper flex`}>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
        </ul>
      </section>
      <section className={`${styles.section} ${styles.image__section}`}>
        <ul className={`${styles.wrapper} wrapper flex`}>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
          <li>
            <Image height='900' src='/img/cinnamonroll__01.jpg' width='1440' alt="cinnamoroll"/>
          </li>
        </ul>
      </section>

      <section className={`${styles.section} ${styles.text__section} flex justify-center items-center `}>
        <h2 className="wrapper text-cyan-300 text-9xl flex font-black leading-none whitespace-nowrap">WELCOME TO THE WORLD OF CINAMOROLLS!</h2>
      </section>
      

      <section id="sticky" className={`${styles.scene} scene h-full w-full bg-current relative`}>
        <div ref={boxRef} className={`${styles.viewer} viewer mx-auto w-full h-full`}></div>
      </section>

      <section className={styles.section}></section>

    </article>
  )
}



export default Sub
