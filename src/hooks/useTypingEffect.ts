import { useEffect } from 'react'
import gsap from './gsapLibrary'

const initializeTypingEffect = (selector: string) => {
  const sentenceElement = document.querySelector(selector) as HTMLElement

  if (!sentenceElement) {
    console.error("문장 요소를 찾을 수 없습니다.")
    return
  }

  const sentence = sentenceElement.textContent || ""
  const words = sentence.split(' ')

  sentenceElement.textContent = ''

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: sentenceElement,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
  })

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

      timeline.to(span, { opacity: 1, y: 0, duration: 0.5 }, index * 0.2 + letterIndex * 0.05)
    })

    sentenceElement.appendChild(wordContainer)
    timeline.to(wordContainer, { opacity: 1, y: 0, duration: 0.5 }, index * 0.2)
  })

  gsap.fromTo(sentenceElement, { opacity: 0 }, { opacity: 1, duration: 1 })
}

const useTypingEffect = (selector: string) => {
  useEffect(() => {
    const handleLoad = () => {
      initializeTypingEffect(selector)
    }

    if (typeof gsap === 'undefined') {
      // gsap 라이브러리가 로드되지 않았다면 로드되었을 때 초기화
      window.addEventListener('gsapLoaded', handleLoad)
    } else if (document.readyState === 'complete') {
      // 문서가 이미 로드되었다면 바로 초기화
      initializeTypingEffect(selector)
    } else {
      // 문서가 로드되기를 기다린 후 초기화
      window.addEventListener('DOMContentLoaded', handleLoad)
    }

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoad)
      window.removeEventListener('gsapLoaded', handleLoad)
    }
  }, [selector])
}

export default useTypingEffect