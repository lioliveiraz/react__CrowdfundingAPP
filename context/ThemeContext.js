import React, { createContext, useEffect, useState } from 'react';
import { fetchData } from '../pages/api/fetchData/requests';

export const Context = createContext();

export default function Provider(props) {
    const [projectArr, setProjectArr] = useState([]);

    useEffect(async () => {

        const response = await fetchData();
        setProjectArr(response);


    }, []);

    return (
        <Context.Provider value={{ projectArr }}>
            {props.children}
        </Context.Provider>
    );


}