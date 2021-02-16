import React, { useState, useEffect } from 'react';
import { fetchStaticPath } from '../../../pages/api/fetchData/requests';
import Donate from './../../Donate/Donate';

function Details() {
    const [projectDetails, setProjectDetails] = useState();
    const [toggleDonateComponent, setToggleDonate] = useState(false);
    useEffect(() => {
        handleData();
    }, []);

    const handleData = async () => {
        const id = window.location.pathname.slice(9);
        const response = await fetchStaticPath(id);
        setProjectDetails(response[0]);


    };

    return (
        <div>
            {projectDetails ?
                <>
                    <h3>{projectDetails.name}</h3>
                    <img src={`/${projectDetails.image}`} alt={`project name: ${projectDetails.name}`} />
                    <p>{projectDetails.donation}</p>
                    <p>{projectDetails.goal}</p>
                    <p>{projectDetails.creator}</p>
                    <p>{projectDetails.description}</p>
                    <button onClick={() => setToggleDonate(true)}>Make dreams come true</button>
                    {toggleDonateComponent ?
                        <Donate projectId={projectDetails.id} /> : null

                    }
                </> : <p>Loading...</p>}


        </div>
    );
}

export default Details;