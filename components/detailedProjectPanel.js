import { useEffect, useState } from 'react'
import styles from './detailedProjectPanel.module.scss'
import Chip from '@mui/material/Chip'
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Button from '@mui/material/Button';

export default function DetailedProjectPanel({ project, index }) {

    const [currentImage, setCurrentImage] = useState(0);
    
    const handleClick = (direction) => {
        if (currentImage + direction > project.images.length-1) {
            setCurrentImage(0)
        } else if (currentImage + direction < 0) {
            setCurrentImage(project.images.length - 1)
        } else {
            setCurrentImage(prev => prev + direction)
        }
    }
    
    useEffect(() => {
        setCurrentImage(0);
    }, [project])

    
    // Every time currentImage changes, re-render the images
    useEffect(() => {
        for (let i = 0; i < project.images.length; i++) {
            if (currentImage != i) {
                document.getElementById('img_' + i).style.display = 'none';
            } else {
                document.getElementById('img_' + i).style.display = 'block'
            }
        }
    }, [currentImage, project])



    return (
        <div className={styles.panel} id={index}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>{project.name}</span>
                </div>
                <div className={styles.description}>
                    {project.date}<br /><br />{project.desc}
                </div>

                <div className={styles.list}>
                    {   project.chips.map(function(word, i){
                            return <Chip label={word} key={i} className={styles.chip} />
                        })
                    }
                </div>

                <div className={styles.waffle}>
                    {project.text}
                </div>

                { project.images.length > 0 &&
                    (<div className={styles.gallery_container}>
                        <div className={styles.gallery_text}>Gallery</div>
                        <div className={styles.gallery}>

                            { project.images.map((url, id) => (
                                <span key={id} className={styles.image_container} style={{ display: 'none' }} id={"img_" + id}>
                                    <Image src={url} alt={url} layout='fill' />
                                </span>
                            ))}

                        </div>

                        <Stack direction="row" spacing={2} className={styles.button_container}>
                            <Avatar className={styles.icon}>             
                                <Button onClick={() => handleClick(-1)} sx={{ color: 'white' }}>
                                    <ChevronLeftRoundedIcon fontSize='large' />
                                </Button>
                            </Avatar>
                            <div className={styles.image_number}>{currentImage + 1} / {project.images.length}</div>
                            <Avatar className={styles.icon}>
                                <Button onClick={() => handleClick(1)} sx={{ color: 'white' }}>
                                    <ChevronRightRoundedIcon fontSize='large' />
                                </Button>
                            </Avatar>
                        </Stack>
                    </div>
                    )}
            </div>
        </div>
    )
}