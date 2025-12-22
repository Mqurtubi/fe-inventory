import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import type{ ColumnData } from "../type";
import useProduct from "../hooks/useProduct";
import { Grid } from "@mui/material";
import InputSearchTable from "./InputSearchTable";
import SelectSortTable from "./SelectSortTable";

const columns: readonly ColumnData[] = [
  { id: "sku", label: "SKU", minWidth: 170 },
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "description",
    label: "Description",
    minWidth: 100,
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "right",
    format: (value) => typeof value == "number"?`Rp. ${value.toLocaleString("id-ID")}`:"",
  },
  {
    id: "currentStock",
    label: "Stock",
    minWidth: 100,
  },
  {
    id: "createdAt",
    label: "Created At",
    minWidth: 100,
    format: (value) => typeof value == "string"? new Date(value).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-"
  },
  {
    id: "updatedAt",
    label: "Updated At",
    minWidth: 100,
    format: (value) => typeof value == "string"? new Date(value).toLocaleDateString("id-ID",{day:"2-digit",month:"long",year:"numeric"}):"-"
  },
];

export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const {products, search, setSearch}=useProduct()
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", paddingTop:"10px" }}>
      <Grid container spacing={2} sx={{paddingX:"10px",alignItems:"center"}}>
        <Grid size={8}>
          <InputSearchTable value={search} onChange={setSearch}/>
        </Grid>
        <Grid size={2}>
          <SelectSortTable/>
        </Grid>
      </Grid>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
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
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={products.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
