import { TextField } from "@mui/material";

export function CSCharSpecies() {
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-specie"
      label="Especie"
      variant="outlined"
      name="info-specie"
      defaultValue=" "
    />
  );
}
