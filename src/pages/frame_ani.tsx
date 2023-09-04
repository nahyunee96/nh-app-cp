import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRef, useEffect } from "react"
import { NextPage } from 'next'
import styles from '../styles/scroll.module.scss'

//function Sub() {
const FrameAni: NextPage = () => {
  
  //first text animation code
  useEffect(() => {
    const sentenceElement = document.querySelector('.sentence') as HTMLElement

    if (!sentenceElement) {
      console.error("문장 요소를 찾을 수 없습니다.")
      return
    }

    const sentence = sentenceElement.textContent || ""
    const words = sentence.split(' ')

    sentenceElement.textContent = ''

    const timeline = gsap.timeline()

    words.forEach((word, index) => {
      const wordContainer = document.createElement('span')
      wordContainer.style.whiteSpace = 'nowrap'
      wordContainer.style.display = 'inline-block'
      wordContainer.style.opacity = '0'
      wordContainer.style.transform = 'translateY(20px)'
      wordContainer.style.marginRight = '10px'

      const letters = word.split('')

      letters.forEach((letter, letterIndex) => {
        const span = document.createElement('span')
        span.textContent = letter
        span.style.display = 'inline-block'
        span.style.opacity = '0'
        span.style.transform = 'translateY(20px)'
        wordContainer.appendChild(span)

        timeline.to(span, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }, index * 0.2 + letterIndex * 0.05)
      })

      sentenceElement.appendChild(wordContainer)
      timeline.to(wordContainer, { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' }, index * 0.2)
    })

    gsap.fromTo(sentenceElement, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power1.inOut' })
  }, [])

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
      <div className={`${styles.section} ${styles.head__section} h-[var(--vh)] flex justify-center items-center`}>
        <h2 className="text-cyan-300 text-7xl flex font-black leading-none overflow-hidden whitespace-nowrap sentence">
          WELCOME&nbsp TO&nbsp THE&nbsp WORLD&nbsp OF&nbsp CINAMOROLLS!
        </h2>
      </div>

      <section id="sticky" className={`${styles.scene} bg-transparent h-[895px] scene w-full relative`}>
        <div ref={boxRef} className={`${styles.viewer} viewer bg-[url('/img/cinnamoroll_frame_b.png?new')] bg-no-repeat bg-left-1/2 max-w-[1000px] mx-auto w-full h-full`}></div>
      </section>

    </article>
  )
}

export default FrameAni
