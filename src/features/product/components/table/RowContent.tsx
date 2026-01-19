import { TableCell, TableRow, Button } from "@mui/material";
import type { RowContentProps } from "../../type";
import ArchiveIcon from "@mui/icons-material/Archive";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import { useAppSelector } from "../../../../hooks/redux";

export default function RowContent({
  row,
  columns,
  handleUpdate,
  handleActive,
  handleDelete,
}: RowContentProps) {
  const { user } = useAppSelector((s) => s.auth);
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
      {columns.map((column) => {
        if (column.type === "action" && user?.role === "ADMIN") {
          return (
            <TableCell key={column.id} align="center" sx={{ fontSize: "16px" }}>
              <Button onClick={() => handleUpdate(row)} color="inherit">
                <ModeEditIcon />
              </Button>
              <Button
                color={row.isActive ? "error" : "success"}
                onClick={() =>
                  row.isActive ? handleDelete(row.id) : handleActive(row.id)
                }
              >
                {row.isActive ? <ArchiveIcon /> : <UnarchiveIcon />}
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
