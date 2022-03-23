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
import InstagramIcon from '@mui/icons-material/Instagram';
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
                                <Avatar className={styles.icon}>
                                    <Email />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="ldokane01@gmail.com" />
                        </ListItem>

                        <ListItem key={'phone'}>
                            <ListItemAvatar>
                                <Avatar className={styles.icon}>
                                    <Phone />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="0469 789 182" />
                        </ListItem>
                    </List>
                </div>
                <div>
                    <span className={styles.text}>rambunctious</span>
                    <Stack direction="row" spacing={2} className={styles.additionalLinks}>
                        <Avatar className={styles.icon}>
                            <LinkedInIcon />
                        </Avatar>
                        <Avatar className={styles.icon}>
                            <YouTubeIcon />
                        </Avatar>
                        <Avatar className={styles.icon}>
                            <TwitterIcon />
                        </Avatar>
                        <Avatar className={styles.icon}>
                            <InstagramIcon />
                        </Avatar>
                    </Stack>
                </div>
            </div>
        </div>
    )
}