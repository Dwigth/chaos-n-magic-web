import { TextField } from "@mui/material";

export function CSCharName() {
  return (
    <TextField
      id="info-name"
      variant="outlined"
      color="secondary"
      fullWidth
      label="Nombre del personaje"
      defaultValue=" "
      type="text"
      name="info-name"
    />
  );
}
