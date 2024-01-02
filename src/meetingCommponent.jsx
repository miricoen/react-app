import meetingStore from "./MeetingStore";
import React, { useState } from "react";
function meetingComponnent() {
  const [appointments, setAppointments] = useState([]);

  return
  (
    <div>
      <h2>פגישות</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <h3>{appointment.service}</h3>
            <p>{appointment.date}</p>
            <p>{appointment.time}</p>
          </li>
        ))}
      </ul>
    </div>









    //     <div>
    //     <h2>שירותים</h2>
    //     <ul>
    //       {meetingStore.map((service) => (
    //         <li key={service.id}>
    //           <h3>{service.name}</h3>
    //           <p>{service.description}</p>
    //           <p>{service.price}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
  )
}

// export default Services