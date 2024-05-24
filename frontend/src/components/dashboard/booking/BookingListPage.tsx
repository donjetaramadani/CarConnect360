import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingListPage: React.FC = () => {
    const [bookings, setBookings] = useState([]);

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
            <h1>Booking List</h1>
            <ul>
                {bookings.map((booking: any) => (
                    <li key={booking.id}>{/* Display booking details here */}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookingListPage;
