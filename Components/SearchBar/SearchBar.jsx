import React, { useContext } from 'react';
import Input from '../Input/Input';
import { Context } from './../../context/ThemeContext';

function SearchBar({ setProjects }) {
    const { projectArr } = useContext(Context);

    const handleSearch = (value) => {
        setProjects(projectArr.filter(({ name, creator }) =>
            name.toLowerCase().includes(value.toLowerCase()) ||
            creator.toLowerCase().includes(value.toLowerCase())));
    };



    return (
        <div>
            <Input type="text" placeholder="Search" handleChange={handleSearch} />
        </div>
    );
}

export default SearchBar;