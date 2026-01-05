import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import type { ColumnData, OptionsSelect, ProductTableProps } from "../../type";
import { Button, Grid } from "@mui/material";
import InputSearchTable from "../filters/InputSearchTable";
import SelectSortTable from "../filters/SelectSortTable";
import ArchiveIcon from "@mui/icons-material/Archive";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
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
    format: (value) =>
      typeof value == "number" ? `Rp. ${value.toLocaleString("id-ID")}` : "",
  },
  {
    id: "currentStock",
    label: "Stock",
    minWidth: 100,
  },
  {
    id: "isActive",
    label: "Status",
    minWidth: 100,
    format: (value) => (
      <span
        style={{
          color: value ? "green" : "red",
        }}
      >
        {value ? "Active" : "Archived"}
      </span>
    ),
  },
  {
    id: "action",
    type: "action",
    label: "Actions",
    minWidth: 100,
    align: "center",
  },
];

type SortBy = "createdAt" | "name" | "updatedAt";
const optionsSortBy: OptionsSelect<SortBy>[] = [
  {
    label: "Created",
    value: "createdAt",
  },
  {
    label: "Name",
    value: "name",
  },
  {
    label: "Updated",
    value: "updatedAt",
  },
];

type OrderBy = "desc" | "asc";
const optionsOrderBy: OptionsSelect<OrderBy>[] = [
  {
    label: "DESC",
    value: "desc",
  },
  {
    label: "ASC",
    value: "asc",
  },
];
type StatusBy = "all" | "active" | "archived";
const optionsStatusby: OptionsSelect<StatusBy>[] = [
  {
    label: "All Status",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Archived",
    value: "archived",
  },
];
export default function ProductTable({
  products,
  search,
  setSearch,
  sortBy,
  setSortBy,
  order,
  setOrder,
  handleDelete,
  handleActive,
  handleUpdate,
  status,
  setStatus,
}: ProductTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
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
    <Paper sx={{ width: "100%", overflow: "hidden", paddingTop: "10px" }}>
      <Grid
        container
        spacing={2}
        sx={{ paddingX: "10px", alignItems: "center" }}
      >
        <Grid size={8}>
          <InputSearchTable value={search} onChange={setSearch} />
        </Grid>
        <Grid size={2} sx={{ display: "flex" }}>
          <SelectSortTable<"createdAt" | "name" | "updatedAt">
            value={sortBy}
            onChange={setSortBy}
            options={optionsSortBy}
          />
          <SelectSortTable<"asc" | "desc">
            value={order}
            onChange={setOrder}
            options={optionsOrderBy}
          />
          <SelectSortTable<"all" | "active" | "archived">
            value={status}
            onChange={setStatus}
            options={optionsStatusby}
          />
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
                      if (column.type === "action") {
                        return (
                          <TableCell key={column.id} align="center">
                            <Button
                              onClick={() => handleUpdate(row)}
                              color="inherit"
                            >
                              <ModeEditIcon />
                            </Button>
                            <Button
                              color={row.isActive ? "error" : "success"}
                              onClick={() =>
                                row.isActive
                                  ? handleDelete(row.id)
                                  : handleActive(row.id)
                              }
                            >
                              {row.isActive ? (
                                <ArchiveIcon />
                              ) : (
                                <UnarchiveIcon />
                              )}
                            </Button>
                          </TableCell>
                        );
                      }
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
