import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title} = service;

    return (
        <div>
            <h2>Book service: {title}</h2>
        </div>
    );
};

export default CheckOut;