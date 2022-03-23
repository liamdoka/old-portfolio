import styles from './introPanel.module.scss'

export default function Introduction() {
    return (
        <div className={styles.panel}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Hey, I&apos;m </span>
                    <span className={styles.name}>Liam O&apos;Kane</span>
                </div>
                <div className={styles.description}>
                    A Junior Full Stack Web Developer. Getting really into React.js, SASS, and UI Design.
                </div>
                <div className={styles.waffle}>
                    Yes I did photoshop a flower into my hair&ndash;<br />
                    Why?<br />
                    I&apos;ve not thought of that before. I think it makes me appear more... <i>approachable.</i><br /><br />
                    Whether that intended result is actually achieved is entirely up to you, however.<br />
                    I should make you vote in a poll...<br /><br />
                    Oh yeah and here is some more quantifiable, programming-based information about me 
                </div>
            </div>
        </div>
    )
}