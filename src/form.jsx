import React, { useState } from "react";

const AppointmentForm = ({ selectedService, onSubmitAppointment }) => {
    const [clientName, setName] = useState("");
    const [clientPhone, setPhone] = useState("");
    const [clientEmail, setEmail] = useState("");
    const [dateTime, setDateTime] = useState("");

    const handleSubmit = async () => {
        // Validate the form data before submitting
        // You can add your validation logic here

        // Create an appointment object with user details and selected service
        const appointment = {
            service: selectedService,
            clientName,
            clientPhone,
            clientEmail,
            dateTime
        };

        try {
            // Send the appointment data to the backend API
            const response = await fetch("http://localhost:8787/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(appointment),
            });

            if (response.ok) {
                // Handle success, maybe show a success message or navigate to a confirmation page
                console.log("Appointment submitted successfully");
            } else {
                // Handle error
                console.error("Failed to submit appointment:", response.statusText);
            }
        } catch (error) {
            // Handle network error
            console.error("Network error:", error.message);
        }

        // Pass the appointment data to the parent component
        onSubmitAppointment(appointment);
    };

    return (
        <div>
            <h2>Appointment Form</h2>
            <form>
                <label>
                    Name:
                    <input type="text" value={clientName} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="tel" value={clientPhone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={clientEmail} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
                </label>

                <button type="submit" onClick={handleSubmit}>
                    Submit Appointment
                </button>
            </form>
        </div>
    );
};


export default AppointmentForm;



