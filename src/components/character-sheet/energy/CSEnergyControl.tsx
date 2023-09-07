import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { CSEnergyButton } from "./CSEnergyButton";
import GEbuttons from "./GenerateEnergyButtons";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function CSEnergyControl() {
  return (
    <Box sx={{ width: "100%", padding: 0, textAlign: "center" }}>
      <Grid
        container
        item
        spacing={2}
        columns={16}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"stretch"}
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
      >
        <Grid item xs={16}>
          <Typography variant="h5">Energía</Typography>
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={2.5} sm={1.2} md={1.3} lg={1} xl={1}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <GEbuttons />
      </Grid>
    </Box>
  );
}
