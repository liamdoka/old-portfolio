import styles from './keywordPanel.module.scss'
import Chip from '@mui/material/Chip'
import { useEffect } from 'react';

const keywords = ['Python','JavaScript','NodeJS','SASS','CSS','HTML','Pandas','Spotify','Discord','NextJS','C++','Java','VIM','VsCode','React','PHP','SQL','Git','Express','SocketIO','MongoDB','Slack','Notion','Windows','Linux','MDL','MUI','Flask','Selenium'].sort(() => Math.random() - 0.5);

export default function KeywordPanel() {

    return (
        <div className={styles.panel}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Capabilities
                </div>
                <div className={styles.description}>
                    A list of everything I&apos;ve worked with &mdash;
                    and would work with again...
                </div>
                <div className={styles.list}>
                    { keywords.map(function(word, i){
                        return <Chip label={word} key={i} className={styles.chip} />
                    })}
                </div>
                <div className={styles.waffle}>
                    If this happens to tickle your fancy, just wait until you see how I&apos;ve used them
                </div>
            </div>
        </div>
    )
}