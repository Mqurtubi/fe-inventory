import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { type SelectChangeEvent } from "@mui/material/Select";
import type { SelectSortTableProps } from "../type";
export default function SelectSortTable<T extends string>({
  value,
  options,
  onChange,
}: SelectSortTableProps<T>) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={value}
          onChange={(e: SelectChangeEvent) => onChange(e.target.value as T)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {options.map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
