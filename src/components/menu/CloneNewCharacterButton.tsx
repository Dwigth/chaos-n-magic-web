// Botón de Clonar Personaje

import { Button, Grid, Typography, TextField, Box } from "@mui/material";

export function CloneCharacterSheet() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        padding: "5px",
      }}
    >
      <Grid container>
        <Grid item xs={10}>
          <TextField
            variant="filled"
            fullWidth
            className="input-text"
            placeholder="Clonar Hoja"
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            style={{
              minWidth: "50%",
              minHeight: "100%",
            }}
          >
            Clonar Personaje
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
