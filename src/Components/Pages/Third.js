import { useEffect } from 'react'
import styles from '../../App.module.css'
import classes from './First.module.css'

const Third = () => {
    const videoURL = "https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/That%20help%20grow%20on.webm"

    useEffect(() => {
        const video = document.getElementById("video")
        video.load()
    }, [])

    return (
        <section className={styles.section}>
            <div className={styles.sticky}>
                <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
                    <video id="video" autoPlay loop src={videoURL} className={classes.video}></video>
                    <div className={classes.text}>
                        <h1>That Helps You</h1>
                        <h1>Grow On</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Third
