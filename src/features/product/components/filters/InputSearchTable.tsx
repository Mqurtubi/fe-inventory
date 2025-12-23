import Input from "@mui/material/Input";
import type { InputSearchProps } from "../../type";

export default function InputSearchTable({
  value,
  onChange,
}: InputSearchProps) {
  return (
    <Input
      placeholder="Search products by name or SKU"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
