import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../../context/ThemeContext';
import ProjectCard from './Project/Card';
import SearchBar from '../SearchBar/SearchBar';

function ProjectList() {
    const { projectArr } = useContext(Context);

    const [projects, setProjects] = useState();

    useEffect(() => {
        setProjects(projectArr);
    }, []);


    return (
        <div>
            <SearchBar setProjects={setProjects} />
            {projects ? projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            )) : projectArr.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;