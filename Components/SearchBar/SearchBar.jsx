import React from 'react';
import Input from '../Input/Input';
import { useSelector } from 'react-redux';

function SearchBar({ setProjects }) {
    const projectsArr = useSelector((state) => state.projects.projects);

    const handleSearch = (value) => {
        setProjects(projectsArr.filter(({ name, creator }) => name.toLowerCase().includes(value.toLowerCase()) ||
            creator.toLowerCase().includes(value.toLowerCase())
        ));
    };

    return (
        <>
            <Input type="text" placeholder="Search" handleChange={handleSearch} />
        </>
    );
}

export default SearchBar;