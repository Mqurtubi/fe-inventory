import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import type { InputSearchProps } from '../type';

export default function InputSearchTable({value,onChange}:InputSearchProps) {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}
    >
      <Input placeholder="Search products by name or SKU" sx={{width:"100%"}} value={value} onChange={(e)=>onChange(e.target.value)}/>
    </Paper>
  );
}
