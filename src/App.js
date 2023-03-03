import React, { useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import FirstPage from './Components/Pages/First';
import SecondPage from './Components/Pages/Second';
import ThirdPage from './Components/Pages/Third';
import FourthPage from './Components/Pages/Fourth';
import FifthPage from './Components/Pages/Fifth';
import SixthPage from './Components/Pages/Sixth';


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
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
      </div>
    </div>
  );
};

export default App;
