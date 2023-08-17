// Botón con input para abrir hoja de Personaje
import { Button, Grid, TextField, Box, Typography } from "@mui/material";

export function OpenCharacterSheet() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        paddingBottom: "10px",
        padding: "5px",
      }}
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={8}>
          <Typography variant="h4"> Abrir Personaje</Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              variant="filled"
              fullWidth
              placeholder="Escribe el ID de tu Hoja"
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="filled"
              fullWidth
              id="charpass"
              className="input-text"
              placeholder="Clave"
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              style={{
                minWidth: "100%",
                minHeight: "100%",
              }}
            >
              Abrir
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function InputID() {}
