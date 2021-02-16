import React from 'react';
import Link from 'next/link';

function ProjectCard({ project }) {
    const { name, image, id } = project;

    return (
        <Link key={id} href={`project/${id}`}>
            <div style={{ cursor: "pointer" }}>
                <h3>{name}</h3>
                <img src={image} alt={`project name ${name}`} />
            </div >
        </Link>
    );
}

export default ProjectCard;