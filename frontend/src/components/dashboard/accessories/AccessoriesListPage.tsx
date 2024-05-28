import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AccessoriesListPage: React.FC = () => {
  const [accessories, setAccessories] = useState([]);

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
      <h1>Accessories List</h1>
      <ul>
        {accessories.map((accessory: any) => (
          <li key={accessory.id}>{accessory.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AccessoriesListPage;
