import React, { useState } from 'react';
import Input from '../Input/Input';
import { postProject } from '../../pages/api/fetchData/requests';
import { validateUserInput } from '../../services/validateUserInput';
import { toast } from 'react-toastify';

function Form(props) {
    const [userInputs, setUserInputs] = useState({
        name: "",
        goal: 0,
        description: "",
        creator: "",
        image: "placeholder.jpg",
        donated: 0

    });
    const [error, setError] = useState({});
    const [message, setMessage] = useState();

    const handleUserInput = (value, name) => {
        setUserInputs({ ...userInputs, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const inputErrors = validateUserInput(userInputs);
        if (inputErrors) {
            setError(inputErrors);

        } else {
            const response = await postProject(userInputs);
            setMessage(`Thank you, ${response.creator}.The project ${response.name} was created`, { position: "top-right" });
            toast("message");

        }

    };

    return (
        <>
            {message && <p style={{ color: "red", fontWeight: "bold" }}>{message}</p>}
            <form onSubmit={handleSubmit}>
                <Input type="text" label="name" handleChange={handleUserInput} name="name" />
                {error.name && <p style={{ color: "red", fontWeight: "bold" }}>{error.name}</p>}
                <Input type="text" label="creator" name="creator" handleChange={handleUserInput} />
                {error.creator && <p style={{ color: "red", fontWeight: "bold" }}>{error.creator}</p>}
                <label htmlFor="description"> Description</label>
                <textarea id="description" name="description" onChange={(e) => handleUserInput(e.target.value, e.target.name)} />
                {error.description && <p style={{ color: "red", fontWeight: "bold" }}>{error.description}</p>}
                <Input type="number" handleChange={handleUserInput} label="goal" name="goal" />
                {error.goal && <p style={{ color: "red", fontWeight: "bold" }}>{error.goal}</p>}
                <input type="submit" />

            </form>
        </>

    );
}

export default Form;