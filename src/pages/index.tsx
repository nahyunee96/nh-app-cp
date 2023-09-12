import React, { useRef, useState, useEffect } from 'react'
import gsap from "gsap/dist/gsap"
import Header from '../components/Header'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { NextPage } from 'next'
import styles from '../styles/main.module.scss'
import useHeadScroll from '../hooks/head'
import Typewriter from '../hooks/typewriter'

gsap.registerPlugin(ScrollTrigger)


//function Sub() {
const Main: NextPage = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  // useHeadScroll 훅을 호출하고 결과를 변수에 저장
  const isHeaderVisible = useHeadScroll(wrapperRef)

  useEffect(() => {
    document.body.classList.add("stop-scrolling")

    setTimeout(() => {
      document.body.classList.remove("stop-scrolling")
    }, 3000)
  }, [])

  const originalText = 'WELCOME TO MY HOMEPAGE!'; // 타이핑될 텍스트
  const typingSpeed = 100; // 타이핑 속도 (밀리초)
  const delay = 3000; // 시작 지연 시간 (밀리초)

  const { text, isTyping } = Typewriter(originalText, typingSpeed, delay);


  return (
    <main className="overflow-x-hidden">
      {/* 헤더 컴포넌트 렌더링 */}
      <Header isHeaderVisible={isHeaderVisible} />

      <div ref={wrapperRef} id="section01" className="section01 h-[var(--vh)] overflow-x-hidden">
        <div className={` ${styles.videoWrapper}`}>
          <video autoPlay loop muted>
            <source src="/img/main_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white text-6xl underline">
            {isTyping ? <p>{text}</p> : null}
          </div>

        </div>
      </div>

      <div id="section02" className="section02 h-[var(--vh)]"></div>
      <div id="section03" className="section03 h-[var(--vh)]"></div>
    </main>
  )
}

export default Main