import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Accessory {
    id: number;
    name: string;
    description: string;
    price: number;
    // Add additional fields as needed
}

const AccessoriesListPage: React.FC = () => {
    const [accessories, setAccessories] = useState<Accessory[]>([]);

    useEffect(() => {
        const fetchAccessories = async () => {
            try {
                const response = await axios.get('http://localhost:7023/api/accessories');
                setAccessories(response.data);
            } catch (error) {
                console.error('Error fetching accessories:', error);
            }
        };

        fetchAccessories();
    }, []);

    return (
        <div>
            <h1>Accessories List</h1>
            <ul>
                {accessories.map((accessory) => (
                    <li key={accessory.id}>
                        <h2>{accessory.name}</h2>
                        <p>Description: {accessory.description}</p>
                        <p>Price: {accessory.price}</p>
                        {}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccessoriesListPage;
