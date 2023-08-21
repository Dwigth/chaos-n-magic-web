import { TextField } from "@mui/material";

export function CSCharSpecies() {
  return (
    <TextField
      color="primary"
      fullWidth
      id="info-specie"
      label="Especie"
      variant="outlined"
      name="info-specie"
      defaultValue=" "
    />
  );
}
