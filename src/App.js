import React, { useEffect } from 'react';
import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Page from './Components/Pages/Page';
import data from './Data/data.json'

// const data = [
//   {
//     title1: 'Welcome To',
//     title2: 'OpeninApp',
//     videoURL1: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/Welcome%20to%20OpeninApp.webm',
//   },
//   {
//     title1: 'A Super Tool',
//     title2: 'For Creators',
//     videoURL2: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/A%20Growth%20Tool%20for%20Creators.webm',
//   },
//   {
//     title1: 'That helps you',
//     title2: 'Grow on',
//     videoURL1: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/That%20help%20grow%20on.webm',
//   },
//   {
//     title1: 'Get Better',
//     title2: 'Brand Deals',
//     videoURL2: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/And%20get%20better%20brand%20deals.webm',
//   },
//   {
//     title1: 'Loved by',
//     title2: ['290+', <br />, 'Creator'],
//     videoURL1: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/Already%20Loved%20by.webm'
//   },
//   {
//     title1: 'Ready To Get',
//     title2: 'Started?',
//     videoURL2: 'https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/Ready%20to%20get%20onboard.webm',
//     isButton: true
//   },
// ]
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
        {
          data.map((item) => {
            return <Page key={Math.random()} title1={item.title1} title2={item.title2} videoURL1={item.videoURL1} videoURL2={item.videoURL2} isButton={item.isButton} />
          })
        }
      </div>
    </div>
  );
};

export default App;
