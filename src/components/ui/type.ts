
interface AppTextFieldProps {
  label: string;
  placeholder?: string;
  type: string;
  value?: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}



export type { AppTextFieldProps };
