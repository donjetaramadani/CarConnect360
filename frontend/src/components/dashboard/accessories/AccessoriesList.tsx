import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AccessoriesList: React.FC = () => {
  const [accessories, setAccessories] = useState<any[]>([]);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const response = await axios.get('https://localhost:7023/api/Accessories');
        setAccessories(response.data);
      } catch (error) {
        console.error('Error fetching accessories:', error);
      }
    };

    fetchAccessories();
  }, []);

  return (
    <div>
      <h2>Accessories List</h2>
      <ul>
        {accessories.map((accessory) => (
          <li key={accessory.id}>
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

export default AccessoriesList;
