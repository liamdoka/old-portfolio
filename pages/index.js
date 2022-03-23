import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import ImagePanel from '../components/imagePanel'
import IntroPanel from '../components/introPanel'
import KeywordPanel from '../components/keywordPanel'
import ProjectPanel from '../components/projectPanel'
import ContactPanel from '../components/contactPanel'
import DetailedProjectPanel from '../components/detailedProjectPanel'
import { getProjectData } from '../lib/projects'
import { useState } from 'react'

export async function getStaticProps() {
	const allProjectsData = getProjectData();
	return {
		props: {
			projects: allProjectsData
		}
	}
}


export default function Home({ projects }) {

	const [selectedPanel, setSelectedPanel] = useState(0)

	const handleClick = (event, index) => {
		setSelectedPanel(index)
		setTimeout(() => {
			if (typeof window !== 'undefined') {
				window.location.href = '#' + index
			}
		}, 10);
	}

	return (
		<div className={styles.container}>
			<Head>
				<title>Liam O{`'`}Kane</title>
				<meta name="description" content="Why you should definitely hire me" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.panels}>
				<div className={styles.child_one}>
					<IntroPanel />
					<ImagePanel />
					<KeywordPanel />
					<ContactPanel />
				</div>

				<div className={styles.child_two}>
					{ projects && <>
						<ProjectPanel handleClick={handleClick} projectList={projects} />
						<DetailedProjectPanel project={projects[selectedPanel]} projectIndex={selectedPanel} /></>
					}
				</div>
			</div>
		</div>
	)
}
