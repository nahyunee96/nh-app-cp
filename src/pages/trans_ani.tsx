import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from 'next/image'
import { useEffect } from "react"
import { NextPage } from 'next'
import styles from '../styles/scroll.module.scss'
import imagesLoaded from 'imagesloaded'

gsap.registerPlugin(ScrollTrigger)

const TransAni: NextPage = () => {
  
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

  // image, text move left or right scrollTrigger animation code
  useEffect(() => {
    const showDemo = () => {

      document.body.style.overflow = "auto"
      document.scrollingElement?.scrollTo(0, 0)

      gsap.utils.toArray<HTMLDivElement>("section").forEach((section, index) => {
        
        const w = section.querySelector(".wrapper") as HTMLDivElement | null

        if (w) {
          const [x, xEnd] =
            index % 2
              ? ['100%', `${(w.scrollWidth - section.offsetWidth) * -1}px`]
              : [`${w.scrollWidth * -1}px`, '0']
          gsap.fromTo(
            w, { x },
            { x: xEnd,
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

  const imageList = [
    '/img/cinnamonroll__01.jpg',
    '/img/cinnamonroll__01.jpg',
    '/img/cinnamonroll__01.jpg',
    '/img/cinnamonroll__01.jpg',
  ]

  return (
    <article className="overflow-x-hidden">
      <div className={`${styles.section} ${styles.head__section} h-[var(--vh)] flex justify-center items-center`}>
        <h2 className="text-cyan-300 text-7xl flex font-black leading-none overflow-hidden whitespace-nowrap sentence">
          WELCOME&nbsp; TO&nbsp; THE&nbsp; WORLD&nbsp; OF&nbsp; CINAMOROLLS!
        </h2>
      </div>

      <section className={`${styles.section} ${styles.text__section} mb-20 flex justify-center items-center `}>
        <h2 className="wrapper text-cyan-300 text-9xl flex font-black leading-none whitespace-nowrap ">WELCOME TO THE WORLD OF CINAMOROLLS!</h2>
      </section>

      <section className={`${styles.section} ${styles.image__section} mb-20`}>
      <ul className="wrapper flex items-center">
        {imageList.map((imageUrl, index) => (
          <li className="flex-shrink-0 pr-4" key={index}>
            <Image height={900} src={imageUrl} width={1440} alt="cinnamoroll" />
          </li>
        ))}
      </ul>
      </section>
      <section className={`${styles.section} ${styles.image__section} mb-20`}>
        <ul className="wrapper flex items-center">
          {imageList.map((imageUrl, index) => (
            <li className="flex-shrink-0 pr-4" key={index}>
              <Image height={900} src={imageUrl} width={1440} alt="cinnamoroll" />
            </li>
          ))}
        </ul>
      </section>

      <section className={`${styles.section} ${styles.text__section} mb-20 flex justify-center items-center `}>
        <h2 className="wrapper text-cyan-300 text-9xl flex font-black leading-none whitespace-nowrap">WELCOME TO THE WORLD OF CINAMOROLLS!</h2>
      </section>

      <section className={`${styles.section} ${styles.head__section} h-[var(--vh)] flex justify-center items-center`}>
        <h2 className="text-cyan-300 text-7xl flex font-black leading-none overflow-hidden whitespace-nowrap sentence">
          END.
        </h2>
      </section>

    </article>
  )
}

export default TransAni
