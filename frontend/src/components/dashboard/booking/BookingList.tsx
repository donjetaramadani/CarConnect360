import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookingList: React.FC = () => {
    const [bookings, setBookings] = useState<any[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('https://localhost:7023/api/Booking');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Booking List</h2>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.id}>
                        <div>Booking ID: {booking.id}</div>
                        <div>Customer ID: {booking.customerId}</div>
                        <div>Date: {booking.date}</div>
                        <div>Status: {booking.status}</div>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookingList;
