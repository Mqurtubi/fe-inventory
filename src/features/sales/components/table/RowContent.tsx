import { TableCell, TableRow, Button } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function RowContent({ row, columns, handleShow }) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
      {columns.map((column) => {
        if (column.type === "action") {
          return (
            <TableCell key={column.id} align="center">
              <Button onClick={() => handleShow(row)} color="inherit">
                <VisibilityOutlinedIcon />
              </Button>
            </TableCell>
          );
        }
        const value = row[column.id];
        return (
          <TableCell
            key={column.id}
            align={column.align}
            sx={{ fontSize: "16px" }}
          >
            {column.format ? column.format(value) : value}
          </TableCell>
        );
      })}
    </TableRow>
  );
}
