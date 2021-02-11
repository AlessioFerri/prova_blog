import React from 'react';
import NavBar from "./Navbar.js";

import {
  AppBar,
  Toolbar,
  Typography,
} from '@material-ui/core';

const AppHeader = () => (
  
  <AppBar position="static">
    <Toolbar>
      <Typography variant="title" color="inherit">
        <strong>My React App</strong>
      </Typography>
      <NavBar />
    </Toolbar>
  </AppBar>
);

export default AppHeader;