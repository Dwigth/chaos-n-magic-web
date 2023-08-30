import { Box, Grid, Typography } from "@mui/material";
import AddDynamicInput from "./GenerateInputs";

export function ActionControl() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container alignContent={"center"} justifyContent={"flex-start"}>
        <Grid item xs={12}>
          <Typography variant="h5">Acciones</Typography>
        </Grid>
        <Grid item xs={12}>
          <AddDynamicInput />
        </Grid>
      </Grid>
    </Box>
  );
}
