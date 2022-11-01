import React from 'react';
import {customersData} from "../data/dummy.js"
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'img', minWidth: 75 },
  { id: 'name', label: 'Nombre', minWidth: 100 },
  {
    id: 'location',
    label: 'Zona',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'puntuation',
    label: 'Calificación',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'id',
    label: 'id',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(id, img, name, location, calification) {
  const puntuation = calification/10
  return {id, img ,name, location, puntuation};
}

const rows = 
  customersData.map((worker)=>{
    const {CustomerID, CustomerImage, CustomerName, Location, Weeks} = worker
    return createData(CustomerID, CustomerImage, CustomerName, Location, Weeks)
  });

export default function Workers() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log(rows)
  console.log(rows.map(row => row[0]))
  console.log(columns.map(row => row["id"]))

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                Tecnicos
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "img"? <img src={value} alt='workerpic' className="rounded-full w-8 h-8"/>
                          :
                          column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}