import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import RowContent from "./RowContent";
import type { ColumnData, StockTableProps } from "../../types";
import dayjs from "dayjs";
import { Chip, Grid, Typography } from "@mui/material";

const columns: readonly ColumnData[] = [
  {
    id: "type",
    label: "Type",
    minWidth: 100,
    format: (value) => {
      if (value !== "IN" && value !== "OUT" && value !== "ADJUST") {
        return "-";
      }
      const styles = {
        IN: {
          bg: "#DCFCE7",
          text: "#16A34A",
        },
        OUT: {
          bg: "#E0E7FF",
          text: "#2563EB",
        },
        ADJUST: {
          bg: "#F3F4F6",
          text: "#374151",
        },
      }[value];

      return (
        <Chip
          label={value}
          size="small"
          sx={{
            backgroundColor: styles.bg,
            color: styles.text,
            fontWeight: 600,
            borderRadius: "999px",
          }}
        />
      );
    },
  },
  {
    id: "product",
    label: "Product",
    minWidth: 100,
    format: (value) =>
      typeof value === "object" && value !== null && "name" in value
        ? (value as { name: string }).name
        : "-",
  },
  {
    id: "qty",
    label: "Qty",
    minWidth: 100,
    format: (value) => {
      if (typeof value !== "number") return "-";
      const isPositive = value > 0;

      return (
        <span
          style={{
            color: isPositive ? "#16A34A" : "#DC2626",
            fontWeight: 600,
          }}
        >
          {isPositive ? `+${value}` : value}
        </span>
      );
    },
  },
  {
    id: "user",
    label: "User",
    minWidth: 100,
    format: (value) =>
      typeof value === "object" && value !== null && "name" in value
        ? (value as { name: string }).name
        : "-",
  },
  {
    id: "note",
    label: "Note",
    minWidth: 100,
    format: (value) => value ?? "-",
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
];

export default function StockTable({ stock }: StockTableProps) {
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
    <Paper
      sx={{
        width: "100%",
        overflow: "hidden",
        paddingTop: "10px",
        borderRadius: "16px",
        fontSize: "18px",
      }}
    >
      <Grid sx={{ paddingX: "20px", paddingY: "25px" }}>
        <Typography variant="h6">All inventory transactions</Typography>
        <Typography variant="body2" color="text.secondary">
          All inventory transactions
        </Typography>
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
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stock
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return <RowContent row={row} columns={columns} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={stock.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
