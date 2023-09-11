import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

const useHeadScroll = (wrapperRef: React.RefObject<HTMLDivElement>) => {
  const [isHeaderVisible, setHeaderVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const section02 = document.getElementById('section02');
    const section02Top = section02?.offsetTop || 0;
    const scrollY = window.scrollY;

    // 헤더가 나타날 조건: window.scrollTop이 section02 상단에 닿았을 때
    if (scrollY >= section02Top) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  };

  useEffect(() => {
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

  useEffect(() => {
    if (wrapperRef.current) {
      let ON_1_ADD: NodeJS.Timeout | undefined;
      let ON_2_ADD: NodeJS.Timeout | undefined;
      let ON_3_ADD: NodeJS.Timeout | undefined;

      ON_1_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add('styles.on1'); // 클래스 조합
      }, 700);

      ON_2_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add('styles.on2'); // 클래스 조합
      }, 1400);

      ON_3_ADD = setTimeout(() => {
        wrapperRef.current!.classList.add('styles.on3'); // 클래스 조합
      }, 2100);

      return () => {
        clearTimeout(ON_1_ADD!);
        clearTimeout(ON_2_ADD!);
        clearTimeout(ON_3_ADD!);
      };
    }
  }, [wrapperRef]);
};


export default useHeadScroll