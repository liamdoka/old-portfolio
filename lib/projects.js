import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'projects')

export function getProjectData() {
    const projects = fs.readFileSync(projectsDirectory + '/projects.json');
    const allProjectsData = JSON.parse(projects.sort(({ date: a }, { date: b }) => {
        if (a < b) {
          return 1
        } else if (a > b) {
          return -1
        } else {
          return 0
        }
    }));

    return allProjectsData
}