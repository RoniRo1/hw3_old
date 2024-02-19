import React from 'react'
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import TextField from "@mui/material/TextField";

export default function LogIn() {
  return (
    <>
      <Grid item xs={8}>
            <TextField
              required
              fullWidth
              label="username"
            //  onChange={(e) => (person.username = e.target.value)}
            />
         <Alert severity="error" //style={{ visibility: values.username }}
         >
            ffff
          </Alert>   </Grid>
    
    
    </>
  )
}
