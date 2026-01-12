import { TableCell, TableRow } from "@mui/material";
import type { RowContentProps } from "../../types";
export default function RowContent({ row, columns }: RowContentProps) {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
      {columns.map((column) => {
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
