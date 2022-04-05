import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Email from '@mui/icons-material/Email';
import Phone from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Icon} from '@iconify/react'
import styles from './contactPanel.module.scss'
import Stack from '@mui/material/Stack';


export default function ContactPanel({ src }) {
    return (
        <div className={styles.panel}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>Contact Me</span>
                </div>
                <div className={styles.description}>
                    If you&apos;ve been captivated by this website, feel free to get in touch!
                </div>

                <div>
                    <span className={styles.text}>traditional</span>
                    <List>
                        <ListItem key={'email'}>
                            <ListItemAvatar>
                                <a href='mailto:ldokane01@gmail.com'>
                                    <Avatar className={styles.icon}>
                                        <Email />
                                    </Avatar>
                                </a>
                            </ListItemAvatar>
                            <ListItemText primary="ldokane01@gmail.com" />
                        </ListItem>

                        <ListItem key={'phone'}>
                            <ListItemAvatar>
                                <Avatar className={`${styles.icon} ${styles.noselect}`} sx={{ cursor: 'default' }}>
                                    <Phone />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="+61 0469 789 182" />
                        </ListItem>
                    </List>
                </div>
                <div>
                    <span className={styles.text}>rambunctious</span>
                    <Stack direction="row" spacing={2} className={styles.additionalLinks}>
                        <a target='_blank' href='https://www.linkedin.com/in/liam-o-kane-016500176/?originalSubdomain=au' rel="noreferrer">
                            <Avatar className={styles.icon}>
                                <LinkedInIcon />
                            </Avatar>
                        </a>
                        <a target='_blank' href='https://www.youtube.com/channel/UCHSqVhWapwCvPZ0zb1OVBFQ' rel="noreferrer">
                            <Avatar className={styles.icon}>
                                <YouTubeIcon />
                            </Avatar>
                        </a>
                        <a target='_blank' href='https://twitter.com/liamDoka' rel="noreferrer">
                            <Avatar className={styles.icon}>
                                <TwitterIcon />
                            </Avatar>
                        </a>
                        <a target='_blank' href='https://github.com/liamdoka' rel="noreferrer">
                            <Avatar className={styles.icon}>
                                <Icon icon='mdi:github' width='32' height='32' />
                            </Avatar>
                        </a> 
                    </Stack>
                </div>
            </div>
        </div>
    )
}