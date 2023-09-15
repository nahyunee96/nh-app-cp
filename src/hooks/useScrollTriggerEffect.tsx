import { useEffect } from 'react'
import gsap from './gsapLibrary'

const useScrollTriggerEffect = () => {
  const isClientSide = typeof window !== 'undefined'
  const animationCleanupFunctions: (() => void)[] = []

  const initializeAnimation = (selector: string, offset: number, duration: number, delay: number, start: string, end: string) => {
    const element = document.querySelector(selector) as SVGPathElement | null
    if (element) {
      const totalLength = element.getTotalLength()
      gsap.set(element, { strokeDasharray: totalLength, strokeDashoffset: totalLength })

      gsap.to(element, {
        strokeDashoffset: 0,
        duration,
        delay,
        scrollTrigger: {
          trigger: selector,
          start,
          end,
          scrub: true,
          onUpdate: (self) => {
            if (self) {
              const progress = self.progress
              const currentOffset = totalLength * (1 - progress)
              gsap.set(element, { strokeDashoffset: currentOffset })
            }
          },
        },
      })
    }
  }

  const handleResize = () => {
    initializeAnimation('.cinnamon__body', 64519, 2, 1, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__eye_1', 1272, 1, 2, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__eye_2', 1273, 1, 2, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__mouth', 3503, 1, 3, 'top center', 'bottom center')
    initializeAnimation('.mask__2', 3180, 3, 1, 'top-=60% center', 'bottom-=40% center')
  }

  if (isClientSide) {
    initializeAnimation('.cinnamon__body', 64519, 2, 1, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__eye_1', 1272, 1, 2, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__eye_2', 1273, 1, 2, 'top center', 'bottom center')
    initializeAnimation('.cinnamon__mouth', 3503, 1, 3, 'top center', 'bottom center')
    initializeAnimation('.mask__2', 3180, 3, 1, 'top-=120% center', 'bottom center')

    const scrollTrigger = gsap.to('.cinnamon__body', {
      strokeDashoffset: 64519,
      duration: 2,
      ease: 'none',
      delay: 1,
      scrollTrigger: {
        trigger: '.cinnamon__body',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          if (self) {
            const progress = self.progress
            const totalLength = 64519
            const currentOffset = totalLength * (1 - progress)
            gsap.to('.cinnamon__body', {
              strokeDashoffset: currentOffset,
              duration: 0.1,
            })
          }
        },
      },
    })

    animationCleanupFunctions.push(() => scrollTrigger.kill())

    window.addEventListener('resize', handleResize)
  }

  // 컴포넌트가 언마운트될 때 애니메이션 정리
  return () => {
    animationCleanupFunctions.forEach((cleanup) => cleanup())
    window.removeEventListener('resize', handleResize)
  }
}

export default useScrollTriggerEffect