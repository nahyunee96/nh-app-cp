import { useEffect } from 'react'

export const useScrollListener = (callback: (scrollY: number) => void) => {
  useEffect(() => {
    const handleScroll = () => {
      callback(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback])
}