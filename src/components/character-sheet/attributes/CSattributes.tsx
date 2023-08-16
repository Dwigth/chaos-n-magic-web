// import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CSattributes() {
  return (
    <Box sx={{ width: "140%", padding: 1 }}>
      <Grid
        container
        rowSpacing={0}
        columnSpacing={{ xs: 1, sm: 3, md: 0.5 }}
        spacing={0}
      >
        <Grid xs={1.8}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Personalidad"
              variant="outlined"
              type="number"
              name="personalidad"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Combate"
              variant="outlined"
              type="number"
              name="combate"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Inteligencia"
              variant="outlined"
              type="number"
              name="intelligent"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Fortaleza"
              variant="outlined"
              type="number"
              name="strength"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Agilidad"
              variant="outlined"
              type="number"
              name="agility"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Sentidos"
              variant="outlined"
              type="number"
              name="senses"
              defaultValue="0"
            />
          </Item>
        </Grid>
        <Grid xs={1.7}>
          <Item>
            <TextField
              id="outlined-basic"
              label="Mente"
              variant="outlined"
              type="number"
              name="mind"
              defaultValue="0"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
