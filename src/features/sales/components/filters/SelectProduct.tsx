import {
  FormControl,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import type { SelectProductProps } from "../../types";

export default function SelectProduct<T extends string>({
  value,
  product,
  handleChange,
}: SelectProductProps<T>) {
  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={(e: SelectChangeEvent) => handleChange(e.target.value as T)}
        displayEmpty
        renderValue={(selected) => {
          if (!selected) return <em>Select product</em>;

          const selectedItem = product.find((p) => p.id === selected);
          return selectedItem ? (
            `${selectedItem.name} - Rp. ${selectedItem.price.toLocaleString(
              "id-ID"
            )}`
          ) : (
            <em>Unknown product</em>
          );
        }}
        inputProps={{ "aria-label": "Without label" }}
      >
        {product.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name} - Rp. {item.price.toLocaleString("id-ID")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
