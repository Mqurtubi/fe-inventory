import { InputLabel, TextField } from "@mui/material";
import type { AppTextFieldProps } from "./type";
export default function AppTextField({
  label,
  placeholder,
  type,
  value,
  handleChange,
  name,
  error,
  helperText,
}: AppTextFieldProps) {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <TextField
        placeholder={placeholder}
        sx={{ width: "100%" }}
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        error={error}
        helperText={helperText}
      />
    </div>
  );
}
