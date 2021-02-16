import React, { useState } from 'react';
import Input from '../Input/Input';
import { changeDonationField } from '../../pages/api/fetchData/requests';

function Donate({ projectId }) {
    const [donationValue, setDonationValue] = useState(10);

    const handleDonateRange = (e) => {
        setDonationValue(e);
    };

    const makeDonation = async (e) => {
        e.preventDefault();
        const response = await changeDonationField(projectId);
        console.log(response);
    };

    return (


        <form onSubmit={makeDonation}>
            <h3>Support this project</h3>

            <Input type="range" handleChange={handleDonateRange} label={`${donationValue}$`} max={1000} />
            <input type="submit" value="Donate" />
        </form>


    );
}

export default Donate;