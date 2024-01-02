
// כדי ליצור מחלקה של סוג זה, אתה יכול להשתמש בקוד הבא:
import { useState } from 'react';

import changeHeader from "./edite";



// function businesDate() {
//   const [id, setId] = useState(123);
//   const [name, setName] = useState('Taylor');
//   const [address, setAddress] = useState("28");
//   const [phone, setPhone] = useState("12345678");
//   const [owner, setOwner] = useState("moshe");
//   const [logo, setLogo] = useState("https://coding-academy.org/images/ca_logo.png");
//   const [description, setDescription] = useState(() => createTodos());
// }




export default function ButtonBusinesDate() {
  const [id, setId] = useState(123);
  const [name, setName] = useState('Taylor');
  const [address, setAddress] = useState("28");
  const [phone, setPhone] = useState("12345678");
  const [owner, setOwner] = useState("moshe");
  const [logo, setLogo] = useState("https://coding-academy.org/images/ca_logo.png");
  const [description, setDescription] = useState(() => createTodos());

  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }} >
            {id}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {name}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {address}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {phone}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {owner}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {logo}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0.2 }}>
            {description}
          </Typography>

        </Toolbar>

        <Button variant="contained" disableElevation onClick={changeHeader()}>
          Disable elevation
        </Button>
        <Button variant="contained" disableElevation onClick={changeServe()}>
          Disable elevation
        </Button>
        <Button variant="contained" disableElevation onClick={changeMeet()}>
          Disable elevation
        </Button>
      </AppBar>
    </Box>
  );
}

