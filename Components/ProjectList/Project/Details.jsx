import React, { useState, useEffect } from 'react';
import { fetchStaticPath } from '../../../pages/api/fetchData/requests';
import Donate from './../../Donate/Donate';
import calculatePercentage from './../../../services/calculatePercentage';


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


                    <div style={{ background: "gray", width: "500px", height: '8vh' }}>

                        <div style={{ position: 'absolute', background: "green", width: `${calculatePercentage(projectDetails.goal, projectDetails.donated)}%`, height: '8vh' }}>
                            <p>{calculatePercentage(projectDetails.goal, projectDetails.donated)}%</p>
                        </div>

                    </div>
                    <p>Goal: {projectDetails.goal}$</p>
                    <p>Name:{projectDetails.creator}</p>
                    <p>{projectDetails.description}</p>
                    <button onClick={() => setToggleDonate(true)}>Make dreams come true</button>
                    {toggleDonateComponent ?
                        <Donate project={projectDetails} /> : null

                    }
                </> : <p>Loading...</p>}


        </div>
    );
}

export default Details;