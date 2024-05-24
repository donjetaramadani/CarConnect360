import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Booking {
    id: number;
    customerId: number;
    date: string;
    status: string;
    // Add additional fields as needed
}

const BookingListPage: React.FC = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:7023/api/bookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Booking List</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        <h2>Booking ID: {booking.id}</h2>
                        <p>Customer ID: {booking.customerId}</p>
                        <p>Date: {booking.date}</p>
                        <p>Status: {booking.status}</p>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingListPage;
