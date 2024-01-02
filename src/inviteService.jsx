import React, { useState } from "react";
//רכיב 1
// const ServiceDetails = ({ service, onSelectService }) => {
//   const handleSelectService = () => {
//     onSelectService(service);
//   };

//   return (
//     <div>
//       <h2>{service.name}</h2>
//       <p>{service.description}</p>
//       <p>Price: ${service.price}</p>
//       <p>Duration: {service.duration} minutes</p>
//       <button onClick={handleSelectService}>Select Service</button>
//     </div>
//   );
// };

//רכיב 2
const AppointmentForm = ({ selectedService, onSubmitAppointment }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Validate the form data before submitting
    // You can add your validation logic here

    // Create an appointment object with user details and selected service
    const appointment = {
      service: selectedService,
      name,
      phone,
      email,
    };

 
    // Pass the appointment data to the parent component
    onSubmitAppointment(appointment);
  };

  return (
    <div>
      <h2>Appointment Form</h2>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

   //רכיב 3
const ServiceSelector = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowForm(true);
  };

  const handleSubmitAppointment = (appointment) => {
    // Handle the submitted appointment data
    console.log("Appointment submitted:", appointment);
    // You can add logic to save the appointment data, navigate to a confirmation page, etc.
    // For now, let's just log the data to the console.
  };

  return (
    <div>
      {!showForm ? (
        <>
          <h1>Choose a Service</h1>
          {services.map((service) => (
            <ServiceDetails key={service.id} service={service} onSelectService={handleSelectService} />
          ))}
        </>
      ) : (
        <AppointmentForm selectedService={selectedService} onSubmitAppointment={handleSubmitAppointment} />
      )}
    </div>
  );
};

// Example services data
const services = [
  {
    id: "11",
    name: "Frontal Counseling Session",
    description: "Individual counseling session at the clinic",
    price: 500,
    duration: 60,
  },
  {
    id: "12",
    name: "Online Therapy Session",
    description: "Virtual counseling session via video call",
    price: 400,
    duration: 45,
  },
  // Add more services as needed
];

export default ServiceSelector;