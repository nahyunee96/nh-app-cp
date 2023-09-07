import { useEffect, useRef } from 'react';
import styles from '../styles/main.module.scss'

const MainVideoContainer = () => {
  

  return (
    <div className={` ${styles.videoWrapper}`}>
      <video autoPlay loop muted  >
        <source src="/img/main_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideoContainer;