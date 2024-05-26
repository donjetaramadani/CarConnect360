import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AppointmentManager: React.FC = () => {
    const [appointments, setAppointments] = useState<any[]>([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await axios.get('https://localhost:7023/api/Appointments');
                setAppointments(response.data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    const handleDelete = async (id: number) => {
        try {
            // Send DELETE request to remove the appointment
            await axios.delete(`https://localhost:7023/api/Appointments/${id}`);
            // Update the appointments list after successful deletion
            setAppointments((prevAppointments) => prevAppointments.filter(appointment => appointment.id !== id));
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };

    return (
        <div>
            <h2>Appointment Manager</h2>
            {/* Form for adding appointments */}
            {/* List of upcoming appointments */}
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment.id}>
                        <div>Appointment ID: {appointment.id}</div>
                        <div>Service Type: {appointment.serviceType}</div>
                        <div>Date: {appointment.date}</div>
                        <div>Time: {appointment.time}</div>
                        <div>Status: {appointment.status}</div>
                        {/* Buttons to edit and delete appointments */}
                        <button onClick={() => handleDelete(appointment.id)}>Delete</button>
                        {/* Add additional fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentManager;
