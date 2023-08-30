import { Box, TextField, } from "@mui/material";

export function CSCharImage() {
  return <Box>
    <TextField color="secondary" variant="outlined" minRows={6} label="Apariencia" placeholder="Mi personaje es un Foxen de pelaje blanco con gafas..." fullWidth multiline />
  </Box>;
}
