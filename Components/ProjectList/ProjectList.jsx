import React, { useEffect, useState } from 'react';
import ProjectCard from './Project/Card';
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from './../../store/reducer';

function ProjectList() {

    const dispatch = useDispatch();
    const [filteredProjects, setFilteredProjects] = useState();

    useEffect(() => {
        dispatch(getProjects());

    }, []);
    const projectsArr = useSelector((state) => state.projects.projects);

    useEffect(() => {
        setFilteredProjects(projectsArr);

    }, [projectsArr]);

    return (
        <div>
            <SearchBar setProjects={setFilteredProjects} />
            {filteredProjects ? filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
            )) : <p>Loading...</p>}
        </div >
    );
};

export default ProjectList;