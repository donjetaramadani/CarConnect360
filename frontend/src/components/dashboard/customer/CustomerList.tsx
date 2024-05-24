import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerList: React.FC = () => {
  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('https://localhost:7023/api/Customer');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <div>Name: {customer.name}</div>
            <div>Email: {customer.email}</div>
            <div>Phone Number: {customer.phoneNumber}</div>
            <div>Address: {customer.address}</div>
            {/* Add additional fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
