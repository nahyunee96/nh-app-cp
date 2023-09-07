import React, { useRef, useState, useEffect } from 'react'
import gsap from "gsap/dist/gsap"
import Header from '../components/Header'
import MainVideoContainer from '../components/Main_video'
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { NextPage } from 'next'
import styles from '../styles/main.module.scss'

gsap.registerPlugin(ScrollTrigger)
//function Sub() {
const Main: NextPage = () => {
  const [isHeaderVisible, setHeaderVisible] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const section02 = document.getElementById('section02');
      const section02Top = section02?.offsetTop || 0;
      const scrollY = window.scrollY;

      console.log(section02Top)

      // 헤더가 나타날 조건: window.scrollTop이 section02 상단에 닿았을 때
      if (scrollY >= section02Top) {
        setHeaderVisible(true);
      } else {
        setHeaderVisible(false);
      }
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isHeaderVisible) {
      // 헤더가 나타날 때의 애니메이션 처리
      gsap.fromTo(
        '.header',
        { opacity: 0, y: '-100%' }, // 시작 상태
        { opacity: 1, y: '0%', duration: 0.5, ease: 'power3.inOut' } // 종료 상태
      );
    } else {
      // 헤더가 사라질 때의 애니메이션 처리
      gsap.to('.header', { opacity: 0, y: '-100%', duration: 0.5, ease: 'power3.inOut' });
    }
  }, [isHeaderVisible]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      let ON_1_ADD: NodeJS.Timeout | undefined;
      let ON_2_ADD: NodeJS.Timeout | undefined;
      let ON_3_ADD: NodeJS.Timeout | undefined;
    
      ON_1_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add(styles.on1); // 클래스 조합
      }, 700);

      ON_2_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add(styles.on2); // 클래스 조합
      }, 1400);

      ON_3_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add(styles.on3); // 클래스 조합
      }, 2100);

      return () => {
        clearTimeout(ON_1_ADD);
        clearTimeout(ON_2_ADD);
        clearTimeout(ON_3_ADD);
      };
    }

    
  }, []);

  useEffect(() => {
    document.body.classList.add("stop-scrolling");

    setTimeout(() => {
      document.body.classList.remove("stop-scrolling");
    }, 3000);
  }, []);
  return (
    <main className="overflow-x-hidden">
      {isHeaderVisible && <Header isHeaderVisible={isHeaderVisible} />}
      <div ref={wrapperRef} id="section01" className="section01 h-[var(--vh)] overflow-x-hidden">
        <div className={` ${styles.videoWrapper}`}>
          <video autoPlay loop muted  >
            <source src="/img/main_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="section02" className="section02 h-[var(--vh)]">
        
      </div>
      <div id="section03" className="section03 h-[var(--vh)]">
        
      </div>
       
    </main>
  )
}

export default Main