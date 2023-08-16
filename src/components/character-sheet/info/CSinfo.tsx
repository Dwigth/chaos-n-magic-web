// import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";
// import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CSinfo() {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", padding: 1 }}
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 0.5 }}
        spacing={1}
      >
        <Grid xs={12}>
          <Item>
            <TextField
              fullWidth
              id="info-name"
              label="Nombre del personaje"
              defaultValue=" "
              type="text"
              name="info-name"
            />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <TextField
              fullWidth
              id="info-specie"
              label="Especie"
              variant="outlined"
              type="text"
              name="info-specie"
              defaultValue=" "
            />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item>
            <TextField
              fullWidth
              id="info-diet"
              label="Dieta"
              variant="outlined"
              type="text"
              name="info-diet"
              defaultValue=" "
            />
          </Item>
        </Grid>
        <Grid xs={15}>
          <Item>
            <TextField
              fullWidth
              id="info-profesion"
              label="Profesión"
              variant="outlined"
              type="text"
              name="info-profesion"
              defaultValue=" "
            />
          </Item>
        </Grid>
        <Grid xs={15}>
          <Item>
            <TextField
              fullWidth
              id="info-caracteristicas"
              label="Características"
              variant="outlined"
              type="text"
              name="info-caracteristicas"
              defaultValue=" "
            />
          </Item>
        </Grid>
        <Grid xs={15}>
          <Item>
            <TextField
              fullWidth
              id="info-language"
              label="Idiomas"
              variant="outlined"
              type="text"
              name="info-language"
              defaultValue=" "
            />
          </Item>
        </Grid>
        <Grid xs={3.8}>
          <Item>
            <TextField
              fullWidth
              id="info-velocity-run"
              label="Velocidad al correr"
              variant="outlined"
              type="number"
              name="info-velocity-run"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={3.8}>
          <Item>
            <TextField
              fullWidth
              id="info-velocity-swimming"
              label="Velocidad de nado"
              variant="outlined"
              type="number"
              name="info-velocity-swimming"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={4.4}>
          <Item>
            <TextField
              fullWidth
              id="info-velocity-climb"
              label="Velocidad de escalado"
              variant="outlined"
              type="number"
              name="info-velocity-climb"
              defaultValue="0"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
