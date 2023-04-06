import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, amount) {
  return { date, amount };
}

const rows = [
    createData('01.01.2021', 159),
    createData('01.01.2021', 237),
    createData('01.01.2021', 262),
    createData('01.01.2021', 305),
    createData('01.01.2021', 356),
    createData('01.01.2021', 356),
    createData('01.01.2021', 356),
    createData('01.01.2021', 356),
    createData('01.01.2021', 356),
    createData('01.01.2021',356),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: '100%', maxHeight: '200px', border: '1px solid gray' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Amount (UAH)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.date}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}