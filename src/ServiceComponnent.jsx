
import ServiceStore from "./ServiceStore";
import DisplayServices from "./DisplayServices";
import react, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useRouteLoaderData } from "react-router-dom";
import UserStore from './UserData'

export default function ServicesComponent() {

    const [open, setOpen] = useState(false);




    // const editForm = document.querySelector("#edit-form");

    // מבטל את אירוע ההגשה
    const saveData = (e) => {
        e.preventDefault()
        console.log(oneService)
        fetch("http://localhost:8787/service", { method: "POST" ,
             body: JSON.stringify(oneService) }).then(res =>
                res.json()
            ).then(res =>
                {ServiceStore.list.push(oneService);
                console.log(res)}
            ).catch(err => console.log(err))
    }
    // e.preventDefault();

    //     // מעדכן את ה-state של העסק עם הנתונים החדשים מהטופס
    //     Id = (document.querySelector("#id").value);
    //     Name = (document.querySelector("#name").value);
    //     Description = (document.querySelector("#description").value);
    //     Price = (document.querySelector("#price").value);
    //     Duration = (document.querySelector("#duration").value);

    //     server = new Service(Id, Name, Description, Price, Duration);
    //     ServiceStore.addService(server);
    //     // סוגר את הטופס
    //     editForm.style.display = "none";

    let oneService = {
        name: "",
        description: "",
        id: "0456",
        price: 0,
        duration: ""
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* <ul>{ServiceStore.list.map(item=>{return <><li>{item.name}</li>{UserStore.admin&&<p>לעריכה</p>}</>})}</ul> */}
            <DisplayServices />
            {UserStore.admin && <Button variant="outlined" onClick={handleClickOpen}>
                add service
            </Button>}

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <form id="edit-form" >
                        {/* //onSubmit={saveData} */}
                        <h1>הוסף שרות </h1>
                        <input type="text" id="id" placeholder=" מספר סידורי" onChange={(e) => oneService.id = e.target.value} />
                        <input type="text" id="name" placeholder="שם" onChange={(e) => {oneService.name = e.target.value;console.log(oneService.name)}} />
                        <input type="text" id="description" placeholder="תאור השרות" onChange={(e) => oneService.description = e.target.value} />
                        <input type="text" id="price" placeholder="מחיר" onChange={(e) => oneService.price = e.target.value} />
                        <input type="text" id="duration" placeholder="משך זמן הפגישה" onChange={(e) => oneService.duration = e.target.value} />

                        {/* <input type="submit" defaultValue="שמור "></input> */}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>ביטול</Button>
                    <Button onClick={saveData}>שמור</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

