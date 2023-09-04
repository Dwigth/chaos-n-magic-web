// Botón de Clonar Personaje

import { Button, Grid, TextField, Box, Typography } from "@mui/material";

export function CloneCharacterSheet() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        padding: "5px",
      }}
    >
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={12}>
          <Typography variant="h4" textAlign={"center"}> Clonar Personaje</Typography>
        </Grid>
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
