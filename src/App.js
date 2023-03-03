import React, { useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Pages/Page';
import data from './Data/data.json'

const App = () => {
  useEffect(() => {
    const stickySections = [...document.querySelectorAll(`.${styles.sticky}`)];
    const animate = () => {
      for (let i = 0; i < stickySections.length; i++) {
        let { top } = stickySections[i].parentElement.getBoundingClientRect();
        let transTop = top > 0 ? 0 : top * -1;
        if (transTop >= 1000) transTop = 1000;
        if (top <= 0 && i !== stickySections.length - 1) {
          stickySections[i].style.filter = `blur(${0 + (transTop * 0.01)}px)`;
          stickySections[i].style.transform = `scale3d(${1 - (transTop * 0.001)},  ${1 - (transTop * 0.001)}, 1)`;
          stickySections[i].style.opacity = `${1 - (transTop * 0.0001)}`;
        }
      }
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.page_container}>
        {data.map((item) => {
          return <Page key={Math.random()} title1={item.title1} title2={item.title2} videoURL1={item.videoURL1} videoURL2={item.videoURL2} isButton={item.isButton} />
        })}
      </div>
    </div>
  );
};

export default App;
