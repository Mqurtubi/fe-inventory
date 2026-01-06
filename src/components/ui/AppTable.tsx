import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ArchiveIcon from "@mui/icons-material/Archive";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useState } from "react";
import type { AppTableProps } from "./type";
export default function AppTable<T>({
  data,
  columns,
  handleDelete,
  handleUpdate,
  handleActive,
}: AppTableProps<T>) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
    <>
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.type === "action") {
                        return (
                          <TableCell key={column.id} align="center">
                            {handleUpdate && (
                              <Button
                                onClick={() => handleUpdate(row)}
                                color="inherit"
                              >
                                <ModeEditIcon />
                              </Button>
                            )}
                            {handleActive && handleDelete && (
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
                            )}
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
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
