import { TableCell } from "@mui/material";
import * as React from "react";
import type { Data, ColumnData } from "../type";
interface RowContentProps {
  row: Data;
  columns: ColumnData[];
}
export default function RowContent({ row, columns }: RowContentProps) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {column.render ? column.render(row) : row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}
