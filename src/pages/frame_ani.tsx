import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef, useEffect } from "react"
import { NextPage } from 'next'
import styles from '../styles/scroll.module.scss'

//function Sub() {
const FrameAni: NextPage = () => {

   // cinnamonroll scrollTrigger frame animation
   const boxRef = useRef<HTMLDivElement | null>(null)

   useEffect(() => {
 
     gsap.registerPlugin(ScrollTrigger)
 
     var frame_count  = 16,
     offset_value = 1187
 
     const ctx = gsap.context(() => {
       gsap.to(boxRef.current, {
         backgroundPosition: (-(offset_value * 0.889) * frame_count) + "px 50%",
         ease: "steps(" + frame_count + ")",
         scrollTrigger: {
           trigger: "#sticky",
           start: "-30% top",
           end: "+=" + (frame_count * offset_value),
           pin: true,
           scrub: true,
         }
       })
     }, )
     return () => ctx.revert()
   }, [])

   

  return (
    <article className="overflow-x-hidden">

      <section id="sticky" className={`${styles.scene} bg-transparent h-[895px] scene w-full relative`}>
        <div ref={boxRef} className={`${styles.viewer} viewer bg-[url('/img/cinnamoroll_frame_b.png?new')] bg-no-repeat bg-left-1/2 max-w-[1000px] mx-auto w-full h-full`}></div>
      </section>

    </article>
  )
}

export default FrameAni
