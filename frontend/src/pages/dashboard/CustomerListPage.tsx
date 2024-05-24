import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Customer {
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    // Add additional fields as needed
}

const CustomerListPage: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await axios.get('http://localhost:7023/api/customers');
                setCustomers(response.data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };

        fetchCustomers();
    }, []);

    return (
        <div>
            <h1>Customer List</h1>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        <h2>{customer.name}</h2>
                        <p>Email: {customer.email}</p>
                        <p>Phone Number: {customer.phoneNumber}</p>
                        <p>Address: {customer.address}</p>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerListPage;
