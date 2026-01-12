import Input from "@mui/material/Input";

export default function InputSearchTable({ value, onChange }) {
  return (
    <Input
      placeholder="Search products by name or SKU"
      sx={{ width: "100%" }}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
