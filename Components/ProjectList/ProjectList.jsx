import React, { useEffect, useState } from 'react';
/* import { Context } from './../../context/ThemeContext';
 */import ProjectCard from './Project/Card';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from './../../store/reducer';

function ProjectList() {
    /*     const { projectArr } = useContext(Context);
     */
    const dispatch = useDispatch();
    const [projects, setProjectsArr] = useState();
    const projectsArr = useSelector((state) => state.projects.projects);

    useEffect(() => {
        dispatch(setProjects());
        setProjectsArr(projectsArr);
    }, []);


    return (
        <div>
            <SearchBar setProjects={setProjects} />
            {projects ? projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            )) : <p>Loading...</p>}
        </div>
    );
};

export default ProjectList;