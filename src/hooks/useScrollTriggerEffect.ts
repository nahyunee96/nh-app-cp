import { useEffect } from 'react';
import gsap from './gsapLibrary';

const initializeScrollTrigger = () => {
  // ScrollTrigger 초기화
  gsap.to('.cinnamon__body', {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'none',
    delay: 1,
    scrollTrigger: {
      trigger: '.cinnamon__body',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalLength = 64519;
        const currentOffset = totalLength * (1 - progress);
        gsap.to('.cinnamon__body', {
          strokeDashoffset: currentOffset,
          duration: 0.1,
        });
      },
    },
  });

  // SVG 애니메이션 초기화
  const svgPath = document.querySelector('.cinnamon__body') as SVGPathElement | null;
  if (svgPath) {
    const totalLength = svgPath.getTotalLength();
    gsap.set(svgPath, { strokeDasharray: totalLength, strokeDashoffset: totalLength });
  }

  

  // 초기 애니메이션 설정
  const timeline = gsap.timeline();
  timeline.to('.cinnamon__body', { strokeDashoffset: 0, duration: 1, delay: 1 });
};

const useScrollTriggerEffect = () => {
  useEffect(() => {
    const handleLoad = () => {
      initializeScrollTrigger();
    };

    if (typeof gsap === 'undefined') {
      // gsap 라이브러리가 로드되지 않았다면 로드되었을 때 초기화
      window.addEventListener('gsapLoaded', handleLoad);
    } else if (document.readyState === 'complete') {
      // 문서가 이미 로드되었다면 바로 초기화
      initializeScrollTrigger();
    } else {
      // 문서가 로드되기를 기다린 후 초기화
      window.addEventListener('DOMContentLoaded', handleLoad);
    }

    // 컴포넌트가 언마운트될 때 리스너 제거
    return () => {
      window.removeEventListener('DOMContentLoaded', handleLoad);
      window.removeEventListener('gsapLoaded', handleLoad);
    };
  }, []);
};

export default useScrollTriggerEffect;