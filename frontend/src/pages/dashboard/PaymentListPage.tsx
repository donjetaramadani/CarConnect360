import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Payment {
    id: number;
    amount: number;
    paymentDate: string;
    customerId: number;
    // Add additional fields as needed
}

const PaymentListPage: React.FC = () => {
    const [payments, setPayments] = useState<Payment[]>([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await axios.get('http://localhost:7023/api/payments');
                setPayments(response.data);
            } catch (error) {
                console.error('Error fetching payments:', error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div>
            <h1>Payment List</h1>
            <ul>
                {payments.map((payment) => (
                    <li key={payment.id}>
                        <h2>Payment ID: {payment.id}</h2>
                        <p>Amount: {payment.amount}</p>
                        <p>Date: {payment.paymentDate}</p>
                        <p>Customer ID: {payment.customerId}</p>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentListPage;
