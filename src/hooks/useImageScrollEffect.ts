import { useEffect } from 'react'
import gsap from './gsapLibrary';
import imagesLoaded from 'imagesloaded'

const useImageScrollEffect = () => {
  useEffect(() => {
    const showDemo = () => {
      document.body.style.overflow = "auto"
      document.scrollingElement?.scrollTo(0, 0)

      gsap.utils.toArray<HTMLDivElement>("section").forEach((section, index) => {
        const w = section.querySelector(".wrapper") as HTMLDivElement | null

        if (w) {
          const [x, xEnd] = index % 2
            ? ['100%', `${(w.scrollWidth - section.offsetWidth) * -1}px`]
            : [`${w.scrollWidth * -1}px`, '0']

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
}

export default useImageScrollEffect