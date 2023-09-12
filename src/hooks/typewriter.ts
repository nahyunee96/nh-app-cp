import { useState, useEffect } from 'react'

export function TypingEffect(originalText: string, typingSpeed: number, delay: number) {
  const [text, setText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let currentIndex = 0

    const typingTimeout = setTimeout(() => {
      setIsTyping(true)

      const typingInterval = setInterval(() => {
        if (currentIndex <= originalText.length) {
          setText(originalText.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(typingInterval)
        }
      }, typingSpeed)

      return () => {
        clearInterval(typingInterval)
      }
    }, delay)

    return () => {
      clearTimeout(typingTimeout)
    }
  }, [originalText, typingSpeed, delay])

  return { text, isTyping }
}


export default TypingEffect