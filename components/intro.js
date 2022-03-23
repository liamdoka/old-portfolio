import { Box } from '@mui/system'
import styles from './intro.module.scss'
import { Avatar } from '@mui/material'

export default function Intro() {
    return (
        <Box>
            <div className={styles.container}>
                <div className={styles.avatarDiv}>
                    <Avatar alt="Liam O'Kane" src="/images/pfp.jpg" sx={{ width: 128, height: 128 }}/>
                </div>
                <div className={styles.textDiv}>
                    <h1 className={styles.title}>
                        <span>Hey, I&apos;m </span>
                        <span className={styles.name}>Liam O&apos;Kane</span>
                    </h1>
                    <div className={styles.description}>
                        Junior Full Stack Web Developer. Getting really into React.js, SASS, and UI Design.
                    </div>
                </div>

            </div>
        </Box>
    )
}