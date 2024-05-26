import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Appointment {
    id: number;
    customerId: number;
    serviceId: number;
    date: string;
    time: string;
    status: string;
    // Add additional fields as needed
}

const AppointmentListPage: React.FC = () => {
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('http://localhost:7023/api/appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Appointment List</h1>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        <h2>Appointment ID: {appointment.id}</h2>
                        <p>Customer ID: {appointment.customerId}</p>
                        <p>Service ID: {appointment.serviceId}</p>
                        <p>Date: {appointment.date}</p>
                        <p>Time: {appointment.time}</p>
                        <p>Status: {appointment.status}</p>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentListPage;
