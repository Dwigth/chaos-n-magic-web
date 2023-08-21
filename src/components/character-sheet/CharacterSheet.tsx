// import React from "react";
import CSInfo from "./info/CSinfo";
import CSenergy from "./energy/CSenergy";
import CSattributes from "./attributes/CSAttributes";
import CSdefense from "./defense/CSdefense";
import CSstats from "./stats/CSstats";
import Panels from "./panels/panels";

// import { styled } from "@mui/material/styles";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#060505" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(0),
//   textAlign: "center",
//   // color: theme.palette.text.secondary,
// }));

export default function characterSheet() {
  return (
    <Box sx={{ width: "80%", marginLeft: "10%", marginRight: "10%", marginTop: '2%' }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        spacing={1}
      >
        <Grid xs={2}>
          <CSInfo />
        </Grid>
        <Grid xs={4}>
          <Grid>
            <CSdefense />
          </Grid>
          <Grid>
            <CSenergy />
          </Grid>
          <Grid>
            <CSattributes />
          </Grid>
        </Grid>
        <Grid xs={5}>
          <CSstats />
        </Grid>
        <Grid xs={10}>
          <Panels />
        </Grid>
      </Grid>
    </Box>
  );
}
