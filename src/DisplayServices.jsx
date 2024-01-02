// import React, { useState } from "react";
import ServiceStore from "./ServiceStore";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import AppointmentForm from "./form";
import { Link } from 'react-router-dom';


<CardActions>
  <Link to="/appointments">View Appointments</Link>
  <Button id="admin" size="small">Learn More</Button>
</CardActions>
// const ServiceDetails = ({ service, onSelectService }) => {
//     const handleSelectService = () => {
//       onSelectService(service);
//     };
  

export default function DisplayServices() {
  return (
    <div>
      {ServiceStore.list.map((object,key) =><div key={key}> {printService(object)}</div>)}
    </div>
  );
}

function printService(serve) {

  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Service
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          <span>{serve.id}</span><br/>
          <span>{serve.name}</span><br/>
          <span>{serve.description}</span><br/>
          <span>{serve.price}</span><br/>
          <span>{serve.duration}</span><br/>
          
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button id="admin" size="small" onClick={AppointmentForm}>Select Service</Button>
        <Button id="admin" size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}

