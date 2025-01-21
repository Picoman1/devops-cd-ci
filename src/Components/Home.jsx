import { TableContainer ,TableRow,TableCell,TableHead,TableBody,Table} from '@mui/material'

import React from 'react'
const data=[{"First_Name":"John","Last_Name":"Doe","Age":25,"Address":"New York"},
    {"First_Name":"peter","Last_Name":"Don","Age":25,"Address":"Texas"},
    {"First_Name":"Johnny","Last_Name":"Francis","Age":25,"Address":"Newzland"},]

const Home = () => {
  return (
    <div>
        {/* <h1 style={{color:'white',backgroundColor:'grey'}}>Home page</h1> */}
      <TableContainer style={{backgroundColor:'grey',border:'2px solid black'}}>
        <Table  sx={{
          minWidth: 650,
          '& .MuiTableCell-root': {
            borderRight: '1px solid rgb(255, 251, 251)', // Add vertical borders
          },
        }}
        aria-label="caption table">
          <TableHead>
            <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Address</TableCell>
            </TableRow>
       </TableHead>
       <TableBody>
       {data.map((items) => (
            <TableRow
              key={items.First_Name}
             
            >
                 <TableCell component="th" scope="row">
                {items.First_Name}
              </TableCell>
             
              
              <TableCell >{items.Last_Name}</TableCell>
              <TableCell >{items.Age}</TableCell>
              <TableCell >{items.Address}</TableCell>
              
            </TableRow>
          ))}
       </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home
