import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Grid, InputAdornment, TextField } from "@mui/material";
import InputSearchTable from "../filters/InputSearchTable";
import SearchIcon from "@mui/icons-material/Search";
import RowContent from "./RowContent";
import dayjs from "dayjs";
import type { ColumnData, SalesTableProps } from "../../types";
const columns: readonly ColumnData[] = [
  { id: "code", label: "Invoice Code", minWidth: 100 },
  { id: "customer", label: "Customer", minWidth: 100 },
  {
    id: "total",
    label: "Total",
    minWidth: 100,
    format: (value) =>
      typeof value == "number" ? `Rp. ${value.toLocaleString("id-ID")}` : "",
  },
  {
    id: "createdAt",
    label: "Date",
    minWidth: 100,
    format: (value) => {
      if (typeof value !== "string" && typeof value !== "number") {
        return "-";
      }

      return dayjs(value).format("YYYY-MM-DD HH:mm");
    },
  },
  {
    id: "action",
    type: "action",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];

export default function SalesTable({
  sales,
  search,
  setSearch,
  handleShow,
}: SalesTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        paddingTop: "10px",
        borderRadius: "16px",
      }}
    >
      <Grid sx={{ paddingX: "30px", paddingY: "10px", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          placeholder="Search by invoice code or customer"
          variant="outlined"
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        {/* <InputSearchTable value={search} onChange={setSearch} /> */}
      </Grid>
      <TableContainer sx={{ maxHeight: 550 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#F9FAFB",
                    fontWeight: 600,
                    color: "#374151",
                    fontSize: "18px",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sales
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <RowContent
                    row={row}
                    columns={columns}
                    handleShow={handleShow}
                  />
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={sales.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
