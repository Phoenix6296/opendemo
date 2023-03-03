import { useEffect } from 'react'
import styles from '../../App.module.css'
import classes from './First.module.css'

const Second = () => {
  const videoURL = "https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/A%20Growth%20Tool%20for%20Creators.webm"

  useEffect(() => {
    const video = document.getElementById("video")
    video.load()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
          <div className={classes.text}>
            <h1>A Super Tool</h1>
            <h1>For Creators</h1>
          </div>
          <video id="video" autoPlay loop muted src={videoURL} className={classes.video}></video>
        </div>
      </div>
    </section>
  )
}

export default Second
