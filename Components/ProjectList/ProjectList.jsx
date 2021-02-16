import React, { useContext, useEffect, useState } from 'react';
import { Context } from './../../context/ThemeContext';
import ProjectCard from './Project/Card';
import NavBar from './../NavBar/NavBar';
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
            )) : <p>Loading...</p>}
        </div>
    );
};

export default ProjectList;