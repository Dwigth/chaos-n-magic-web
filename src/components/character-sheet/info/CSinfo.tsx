import Grid from "@mui/material/Unstable_Grid2";
import { Box, Typography } from "@mui/material";
import { CSCharName } from "./CSCharName";
import { CSCharSpecies } from "./CSCharSpecies";
import { CSCharDiet } from "./CSCharDiet";
import { CSCharProfession } from "./CSCharProfession";
import { CSCharCharacteristics } from "./CSCharCharacteristics";
import { HeroWalkingSpeed } from "./speed/HeroWalkingSpeed";
import { HeroSwimmingSpeed } from "./speed/HeroSwimmingSpeed";
import { HeroClimbingSpeed } from "./speed/HeroClimbingSpeed";

export const CSinfo = () => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{ width: "100%", padding: 0 }}
    >
      <Grid
        container
        rowSpacing={0.8}
        columnSpacing={{ xs: 1, sm: 1, md: 0.3 }}
        spacing={1}
      >
        <Grid xs={12}>
          <CSCharName />
        </Grid>
        <Grid container xs={12} direction={"row"}>
          <Grid xs={8}>
            <CSCharSpecies />
          </Grid>
          <Grid xs={4}>
            <CSCharDiet />
          </Grid>
        </Grid>
        <Grid xs={12}>
          <CSCharProfession />
        </Grid>
        <Grid xs={12}>
          <CSCharCharacteristics />
        </Grid>
        <Grid container xs={12} direction={"row"}>
          <Grid xs={12}>
            <Typography variant="h6">Velocidad</Typography>
          </Grid>
          <Grid xs={4}>
            <HeroWalkingSpeed />
          </Grid>
          <Grid xs={4}>
            <HeroSwimmingSpeed />
          </Grid>
          <Grid xs={4}>
            <HeroClimbingSpeed />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
