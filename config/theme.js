import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

export default createMuiTheme({
  palette: {
    primary: pink,
    secondary: red
  },
  overrides: {
    MuiButton: {
      root: {
        color: 'purple',
        '&:hover': {
          backgroundColor: 'purple',
          color: 'white'
        }
      }
    }
  }
});
