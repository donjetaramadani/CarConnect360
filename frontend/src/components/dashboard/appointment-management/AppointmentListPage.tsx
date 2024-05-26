import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccessoryListPage: React.FC = () => {
    const [accessories, setAccessories] = useState([]);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await axios.get('https://localhost:7023/api/Accessory');
                setAccessories(response.data);
            } catch (error) {
                console.error('Error fetching accessories:', error);
            }
        };

        fetchAccessories();
    }, []);

    return (
        <div>
            <h1>Accessory List</h1>
            <ul>
                {accessories.map((accessory: any) => (
                    <li key={accessory.id}>
                        {/* Display accessory details here */}
                        <div>Accessory ID: {accessory.id}</div>
                        <div>Name: {accessory.name}</div>
                        <div>Description: {accessory.description}</div>
                        <div>Price: {accessory.price}</div>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccessoryListPage;
