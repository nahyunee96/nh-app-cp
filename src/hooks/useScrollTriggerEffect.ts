import { useEffect } from 'react';
import gsap from './gsapLibrary';

const useScrollTriggerEffect = () => {

  const isClientSide = typeof window !== 'undefined'

  if (isClientSide) {
    // SVG 애니메이션 초기화
    const svgPath = document.querySelector('.cinnamon__body') as SVGPathElement | null;
    if (svgPath) {
      const totalLength = svgPath.getTotalLength();
      gsap.set(svgPath, { strokeDasharray: totalLength, strokeDashoffset: totalLength });
    }

    // cinnamon__eye 애니메이션 초기화
    const eyePath_1 = document.querySelector('.cinnamon__eye_1') as SVGPathElement | null;
    if (eyePath_1) {
      const eyeLength_1 = eyePath_1.getTotalLength();
      gsap.set(eyePath_1, { strokeDasharray: eyeLength_1, strokeDashoffset: eyeLength_1 });
    }

    // cinnamon__eye 애니메이션 초기화
    const eyePath_2 = document.querySelector('.cinnamon__eye_2') as SVGPathElement | null;
    if (eyePath_2) {
      const eyeLength_2 = eyePath_2.getTotalLength();
      gsap.set(eyePath_2, { strokeDasharray: eyeLength_2, strokeDashoffset: eyeLength_2 });
    }

    // cinnamon__mouth 애니메이션 초기화
    const mouthPath = document.querySelector('.cinnamon__mouth') as SVGPathElement | null;
    if (mouthPath) {
      const mouthLength = mouthPath.getTotalLength();
      gsap.set(mouthPath, { strokeDasharray: mouthLength, strokeDashoffset: mouthLength });
    }

    // mask__2 애니메이션 초기화
    const maskPath = document.querySelector('.mask__2') as SVGPathElement | null;
    if (maskPath) {
      const maskLength = maskPath.getTotalLength();
      gsap.set(maskPath, { strokeDasharray: maskLength, strokeDashoffset: maskLength });
    }

    // ScrollTrigger 초기화
    gsap.to('.cinnamon__body', {
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

    // cinnamon__eye 애니메이션 설정
    gsap.to('.cinnamon__eye_1', {
      strokeDashoffset: 1272,
      duration: 1,
      delay: 2,
      scrollTrigger: {
        trigger: '.cinnamon__body',
        start: 'top center',
        end: 'bottom-=20% center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalLength = 1272;
          const currentOffset = totalLength * (1 - progress);
          gsap.to('.cinnamon__eye_1', {
            strokeDashoffset: currentOffset,
            duration: 0.1,
          });
        },
      },
    });

    // cinnamon__eye 애니메이션 설정
    gsap.to('.cinnamon__eye_2', {
      strokeDashoffset: 1272,
      duration: 1,
      delay: 2,
      scrollTrigger: {
        trigger: '.cinnamon__body',
        start: 'top center',
        end: 'bottom-=20% center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalLength = 1272;
          const currentOffset = totalLength * (1 - progress);
          gsap.to('.cinnamon__eye_2', {
            strokeDashoffset: currentOffset,
            duration: 0.1,
          });
        },
      },
    });

    // cinnamon__mouth 애니메이션 설정
    gsap.to('.cinnamon__mouth', {
      strokeDashoffset: 3503,
      duration: 1,
      delay: 3,
      scrollTrigger: {
        trigger: '.cinnamon__body',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalLength = 3503;
          const currentOffset = totalLength * (1 - progress);
          gsap.to('.cinnamon__mouth', {
            strokeDashoffset: currentOffset,
            duration: 0.1,
          });
        },
      },
    });

    // mask__2 애니메이션 설정
    gsap.to('.mask__2', {
      strokeDashoffset: 3180,
      duration: 3,
      delay: 1,
      scrollTrigger: {
        trigger: '.section03',
        start: 'top-=20% top',
        end: 'bottom-=40% center',
        //markers: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalLength = 3180;
          const currentOffset = totalLength * (1 - progress);
          gsap.to('.mask__2', {
            strokeDashoffset: currentOffset,
            duration: 0.1,
          });
        },
      },
    });
  };
};

//useEffect(() => {
  useScrollTriggerEffect();
//}, []);



export default useScrollTriggerEffect;