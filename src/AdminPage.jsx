import React from 'react';
import { Route, Link, Routes, Outlet} from 'react-router-dom';
// import BusinessDetails from './BusinessDetails'; // Create this component
// import ServicesList from './ServicesList'; // Create this component
// import AppointmentsList from './AppointmentsList'; // Create this component
import Layout from './Layout'; 
const AdminPage = () => {
  return (
    // <Layout>
<>
      <nav>
        <ul>
          {/* <li>
            <Link to="business">Business Details</Link>
          </li> */}
          <li>
            <Link to="services">Services List</Link>
          </li>
          <li>
            <Link to="appointments">Appointments List</Link>
          </li>
        </ul>
      </nav>

<Outlet></Outlet>
       </>
        //  </Layout>
  );
};

export default AdminPage;