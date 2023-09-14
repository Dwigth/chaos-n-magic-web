import { Box, Typography } from "@mui/material";
import { CSStanceIcon } from "./CSStanceIcon";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { CSTemporalStance } from "./CSTemporalStance";

export default function CSStanceControl() {
  return (
    <Box style={{ padding: 3 }}>
      <Grid2 container direction={"row"} spacing={1} alignItems={"flex-start"}>
        <Grid2 xs={12}>
          <Typography align="center">Postura</Typography>
        </Grid2>
        <Grid2
          container
          xs={8}
          sm={7}
          md={7}
          lg={7}
          xl={7}
          padding={2}
          spacing={3}
          rowSpacing={2}
          /* En esta parte de aquí se vaa leer la cantidad de posturas máximas, se creará 1 Checkbox
        por cada punto de postura que se tenga.  */
        >
          <Grid2 xs={3}></Grid2>
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
        <Grid2 container xs={4} sm={4} md={4} lg={4} xl={4} spacing={0.5}>
          <Grid2 xs={4} sm={4} md={4} lg={4} xl={4}>
            <CSTemporalStance />
          </Grid2>
          <Grid2 xs={5} sm={5} md={5} lg={5} xl={5}>
            <CSTemporalStance />
          </Grid2>
          <Grid2 xs={4} sm={4} md={4} lg={4} xl={4}>
            <CSTemporalStance />
          </Grid2>
          <Grid2 xs={5} sm={5} md={5} lg={5} xl={5}>
            <CSTemporalStance />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
}
