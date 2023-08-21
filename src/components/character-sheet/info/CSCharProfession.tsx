import { TextField } from "@mui/material";

export function CSCharProfession() {
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-profesion"
      label="Profesión"
      variant="outlined"
      type="text"
      name="info-profesion"
      defaultValue=" "
    />
  );
}
