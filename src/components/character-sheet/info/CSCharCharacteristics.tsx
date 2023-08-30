import { TextField } from "@mui/material";

export function CSCharCharacteristics() {
  return (
    <TextField
      fullWidth
      id="info-caracteristicas"
      label="Características"
      variant="outlined"
      color="secondary"
      type="text"
      name="info-caracteristicas"
      defaultValue=" "
      multiline
      placeholder="Característica (+1)"
      minRows={3}
    />
  );
}
