import React from 'react'
import { Box, TextField } from '@mui/material'
const Register = () => {
  return (
    <div >
        <h1 style={{color:'white',backgroundColor:'grey'}}>Registration</h1>
      <Box style={{backgroundColor:'grey'}}
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div style={{color:'cyan'}}>
        <div>
        <TextField
          required
          id="outlined-required"
          label=" First Name"
          
        />
         <TextField
          required
          id="outlined-required"
          label="Second Name"
          
        />
        <TextField
          
          id="outlined-disabled"
          label="place"
        
        />
        </div>
        <div>
        <TextField
          id="outlined-number"
          label="Age"
          type="number"
         
        />
        <TextField
          id="outlined-password-input"
          label="email"
          type="email"
          
        />
        <TextField
          id="outlined-password-input"
          label="password"
          type="password"
          
        />
        </div>
       
       
    
        
      </div>
      
    </Box>
    </div>
  )
}

export default Register
