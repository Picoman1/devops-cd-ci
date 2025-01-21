import React from 'react'
import {TextField,Button, colors} from '@mui/material'

const Login = () => {
  return (
    <div>
      <h1 style={{color:'white',backgroundColor:'grey'}}>Login Page</h1>
      <TextField id="outlined-basic" label="User Name" variant="outlined" /> <br /><br />
      <TextField id="outlined-basic" label="Password" variant="outlined" /> <br /><br />
      <Button variant="outlined">Outlined</Button>
    </div>
  )
}

export default Login
