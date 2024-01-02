import React from 'react';
import { BrowserRouter as Router, Route, Routes,Link  } from 'react-router-dom';
import AdminPage from './AdminPage'; 
import CustomerPage from './Castomer'; 
import BusinessDetails from './businessData'
import ServicesList from './ServiceComponnent'
import AppointmentsList from './MeetingComponentTemp'

import './App.css'

import LoginForm from './LoginForm';
const App = () => {
  return (
    <Router>


      <Routes>
      <Route path="/" element={<LoginForm/>} ></Route>

          <Route path="/admin" element={<AdminPage></AdminPage>} >
           <Route path="business" element={<BusinessDetails></BusinessDetails>} />
           <Route path="services" element={<ServicesList></ServicesList>} />
        <Route path="appointments" element={<AppointmentsList></AppointmentsList>} />
        </Route>
        <Route path="/customer" element={<CustomerPage></CustomerPage>} />
      </Routes>
     

      </Router>
  );
};

export default App;
