import React, { useEffect, useRef, useState } from 'react'
import gsap from './gsapLibrary'
import { NextPage } from 'next'
import FrameAniHTML from '../pages/frameAniHTML'

const FrameAni: NextPage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const frame_count = 16;
    const offset_value = 1187;

    const updateBackgroundPosition = () => {
      if (boxRef.current) {
        const width = window.innerWidth;
        const scrollPercent = (scrollY / (frame_count * offset_value)) * 100;

        const backgroundPosition = width > 1920
          ? `-${offset_value * 0.889 * frame_count}px ${scrollPercent}%`
          : `-${offset_value * 0.594 * frame_count}px ${scrollPercent}%`;

        boxRef.current.style.backgroundPosition = backgroundPosition;
      }
    };

    const handleResize = () => {
      // 리사이즈 이벤트 발생 시 scrollY와 backgroundPosition을 초기화
      setScrollY(0);

      if (boxRef.current) {
        // 리사이즈 이벤트에 대한 반응으로 backgroundPosition을 업데이트
        const frame_count = 16;
        const offset_value = 1187;

        const backgroundPosition = window.innerWidth > 1920
          ? `-${offset_value * 0.889 * frame_count}px 50%`
          : `-${offset_value * 0.594 * frame_count}px 50%`;

        boxRef.current.style.backgroundPosition = '0% 0%';
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const frame_count = 16;
    const offset_value = 1187;

    const animation = gsap.to(boxRef.current, {
      backgroundPosition: window.innerWidth > 1920
        ? `-${offset_value * 0.889 * frame_count}px 50%`
        : `-${offset_value * 0.594 * frame_count}px 50%`,
      ease: `steps(${frame_count})`,
      scrollTrigger: {
        trigger: '#sticky',
        start: 'top-=25% top',
        end: `+=${frame_count * offset_value}`,
        pin: true,
        scrub: true,
        onEnter: () => {
          // ScrollTrigger 진입 시 scrollY와 backgroundPosition 초기화
          setScrollY(0);

          if (boxRef.current) {
            // ScrollTrigger 진입에 대한 반응으로 backgroundPosition을 업데이트
            const backgroundPosition = window.innerWidth > 1920
              ? `-${offset_value * 0.889 * frame_count}px 50%`
              : `-${offset_value * 0.594 * frame_count}px 50%`;

            boxRef.current.style.backgroundPosition = backgroundPosition;
          }
        },
      },
    });

    return () => {
      animation.kill();
    };
  }, []);

  return <FrameAniHTML boxRef={boxRef} />;
};

export default FrameAni;