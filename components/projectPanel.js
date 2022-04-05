import { useState } from 'react';
import styles from './projectPanel.module.scss'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider'
import ArrowForward from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';

export default function ProjectPanel({ projectList, handleClick }) {
    
    const itemsPerPage = 7;
    const [page, setPage] = useState(1);
    const [numPages] = useState(Math.ceil(projectList.length / itemsPerPage));
    
    const handleChange = (event, value) => {
        setPage(value)
    }

    return (
        <div className={styles.panel}>
            <div className={styles.content}>
                <div className={styles.title}>
                    Past Projects
                </div>
                <div className={styles.description}>
                    A list of some of the things I&apos;ve worked on
                </div>

                <div className={styles.data}>
                    <div className='pages'>
                        <Pagination 
                            count={numPages} 
                            size='large'
                            page={page}
                            onChange={handleChange}
                            defaultPage={1}
                            hidePrevButton 
                            hideNextButton 
                        />
                    </div>
                    <List sx={{ width: '100%', maxWidth: 360 }}>
                        {projectList
                            .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                            .map((project, id) => (
                            <span key={id + ((page-1) * itemsPerPage)}>
                            <ListItemButton
                                //selected={selectedPanel === id + ((page-1) * itemsPerPage)}
                                className={styles.listItem} 
                                onClick={(event) => handleClick(event, id + ((page-1) * itemsPerPage))} 
                                key={id + ((page-1) * itemsPerPage)}>
                                <ListItem
                                    secondaryAction={
                                        <ArrowForward sx={{ fontSize: 32 }} />
                                    }
                                >
                                    <ListItemText primary={project.name} secondary={project.date} />
                                </ListItem>
                            </ListItemButton>
                            <Divider /></span>
                        ))}
                    </List>
                </div>
            </div>
        </div>
    )
}