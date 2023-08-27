import { Box, Typography } from "@mui/material";
import { CSStanceIcon } from "./CSStanceIcon";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CSTemporalStance } from "./CSTemporalStance";

export default function CSStanceControl() {
  return (
    <Box style={{padding: 3}}>
      <Grid2 container direction={"row"} spacing={1} alignItems={"flex-start"}>
        <Grid2 xs={12}>
          <Typography>Postura</Typography>
        </Grid2>
        <Grid2
          container
          spacing={3}
          /* En esta parte de aquí se vaa leer la cantidad de posturas máximas, se creará 1 Checkbox
        por cada punto de postura que se tenga.  */
        >
          <Grid2 xs={1}></Grid2>
          <Grid2 xs={3}>
            <CSStanceIcon defaultChecked />
          </Grid2>
          <Grid2 xs={3}>
            <CSStanceIcon defaultChecked />
          </Grid2>
          <Grid2 xs={3}>
            <CSStanceIcon defaultChecked />
          </Grid2>
        </Grid2>
        <Grid2 container xs={3} spacing={0.3}>
          <Grid2 xs={6}>
            <CSTemporalStance defaultChecked />
          </Grid2>
          <Grid2 xs={6}>
            <CSTemporalStance defaultChecked />
          </Grid2>
          <Grid2 xs={6}>
            <CSTemporalStance defaultChecked />
          </Grid2>
          <Grid2 xs={6}>
            <CSTemporalStance defaultChecked />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
