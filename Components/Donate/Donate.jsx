import React, { useState } from 'react';
import Input from '../Input/Input';
import { changeDonationField } from '../../pages/api/fetchData/requests';
import { toast } from 'react-toastify';

function Donate({ project }) {
    const [donationValue, setDonationValue] = useState(10);
    const [message, setMessage] = useState("Support this project");

    const handleDonateRange = (e) => {
        setDonationValue(e);
    };

    const makeDonation = async (e) => {
        e.preventDefault();
        project['donated'] = parseFloat(donationValue);
        const response = await changeDonationField(project.id, project);
        response && toast("🦄 YOU ARE AN UNICORN! THANK YOU VERY MUCH 🦄 ");

    };

    return (


        <form onSubmit={makeDonation}>
            <Input type="range" handleChange={handleDonateRange} label={`${donationValue}$`} max={project.goal} min={10} />
            <input type="submit" value="Donate" />
        </form>


    );
}

export default Donate;