import React, { useRef, useEffect } from 'react'

import gsap from "gsap/dist/gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { MotionPathPlugin } from 'gsap/dist/MotionPathPlugin'
import styles from '../styles/draw.module.scss'

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)

const AnimatedSVG: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;

    if (svg) {
      gsap.defaults({ ease: 'none' });

      const pulses = gsap.timeline({
        defaults: {
          duration: 0.5, // Adjust the duration for a slower animation
          autoAlpha: 0.5, // Reduce opacity for a subtle effect
          scale: 1.2, // Adjust the scale for a more gentle pulse
          transformOrigin: 'center',
          ease: 'elastic(0.05, 0.05)', // Adjust the ease for a smoother animation
        },
      });

      pulses
        .to('.ball02, .text01', {}, 2)
        .to('.ball03, .text02', {}, 2)
        .to('.ball04, .text03', {}, 2);

      const main = gsap.timeline({
        defaults: { duration: 10 }, // Adjust the duration for a slower scroll
      });

      main
        .to('.ball01', { duration: 1, autoAlpha: 1 })
        .from('.theLine', { drawSVG: 0 }, 0)
        .to('.ball01', {
          motionPath: {
            path: '.theLine',
            align: '.theLine',
            alignOrigin: [0.5, 0.5],
          },
        }, 0)
        .add(pulses, 0);

      ScrollTrigger.create({
        trigger: svg,
        start: 'top top',
        end: 'bottom bottom',
        animation: main,
        scrub: true,
      });
    }
  }, []);

  return (
    <svg
      id="svg"
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      

      <path className={`${styles.theLine} theLine`} 
            d="M -5,0
            Q 450 383.33 300 600 
            T 130 1125
            Q 100 1375 300 1600
            T 150 2000"
            fill="none" stroke="white" strokeWidth="10px" />
      
      
      <circle className={`${styles.ball} ball ball02`} r="20" cx="278" cy="501"></circle>
      <circle className={`${styles.ball} ball ball03`} r="20" cx="327" cy="1001"></circle>
      <circle className={`${styles.ball} ball ball04`} r="20" cx="203" cy="1501"></circle>
      
      <image 
        className={`${styles.ball} ${styles.ball01} ball ball01`} 
       
        href='/img/cinnamoroll_airplane.png'
        preserveAspectRatio="xMidYMid slice"
        style={{ maxWidth: '421px' }}
      />
      
    </svg>
  );
};

export default AnimatedSVG;