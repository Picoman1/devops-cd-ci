import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Application
          </Typography>
          <Link to={'/'}><Button color="white">Home</Button></Link>
          <Link to={'/login'}><Button color="inherit">Login</Button></Link>
          <Link to={'/register'}><Button color="inherit">Register</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
