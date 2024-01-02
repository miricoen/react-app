// CustomerPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component
import ServicesComponent from './ServiceComponnent';
// import ServicesList from './ServicesList'; // Create this component
// import AppointmentForm from './AppointmentForm'; // Create this component

const CustomerPage = () => {
  return (
    // <Layout>
      // <Routes>
      //   <Route path="/customer/services" element={<ServicesList/>} />
      //   <Route path="/customer/appointment" element={<AppointmentForm/>} />
      // </Routes>

<ServicesComponent></ServicesComponent>



  );
};

export default CustomerPage;
