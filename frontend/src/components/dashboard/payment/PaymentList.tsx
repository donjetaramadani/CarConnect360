import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList: React.FC = () => {
    const [payments, setPayments] = useState<any[]>([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('https://localhost:7023/api/Payment');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div>
            <h2>Payment List</h2>
            <ul>
                {payments.map((payment) => (
                    <li key={payment.id}>
                        <div>Payment ID: {payment.id}</div>
                        <div>Amount: {payment.amount}</div>
                        <div>Date: {payment.paymentDate}</div>
                        <div>Customer ID: {payment.customerId}</div>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentList;
