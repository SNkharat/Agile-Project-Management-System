import { TextField } from "@mui/material";

export default function FormInput({ label, type = "text", onChange }) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      margin="normal"
      onChange={onChange}
      sx={{
        "& .MuiOutlinedInput-root": {
          height: 50,
          
        },
      }}
    />
  );
}