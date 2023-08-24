import { Box, IconButton, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { CSEnergyButton } from "./CSEnergyButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export function CSEnergyControl() {
  return (
    <Box sx={{ width: "100%", padding: 0, textAlign: "center" }}>
      <Grid
        container
        spacing={2}
        columns={16}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Grid item xs={16}>
          <Typography variant="h5">Energía</Typography>
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1.2}>
          <CSEnergyButton {...label} defaultChecked />
        </Grid>
        <Grid item xs={1} md={1}>
          <IconButton aria-label="agregar" style={{ paddingTop: 4 }} color="secondary">
            <AddCircleIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}