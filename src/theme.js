// src/theme.js

import { createTheme} from '@material-ui/core/styles';

const theme = createTheme({

  palette: {
    primary: {
      main: '#ff0000', // Customize the primary color
    },
    secondary: {
      main: '#00ff00', // Customize the secondary color
    },
  },
  typography: {
    fontFamily: 'Arial', // Customize the default font family
    fontSize: 16, // Customize the default font size for all elements
    h1: {
      fontSize: '2rem', // Customize heading level 1 font size
      fontWeight: 'bold', // Customize heading level 1 font weight
      marginBottom: '1rem', // Add margin bottom to heading level 1 element 
    },
    body1 :{
        fontStyle:'italic'
     }
  
   
   },

   spacing:{
       unit :5,
       buttonSpacing:{
           padding:"10px",
           margin:"5px"
       }
     
   }

});

export default theme;