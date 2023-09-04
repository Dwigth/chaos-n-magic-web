import { TextField } from "@mui/material";

export function MagicSchoolsLabel() {
  return (
    <TextField
      variant="outlined"
      color="secondary"
      label="Escuelas de Magia"
      InputLabelProps={{
        shrink: true,
      }}
      placeholder="Escuela de lo Arcano...
Escuela de lo Divino..."
      multiline
      minRows={2}
      maxRows={4}
      fullWidth
    />
  );
}
