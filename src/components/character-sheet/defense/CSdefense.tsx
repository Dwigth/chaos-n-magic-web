import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CSCurrentDefense } from "./defense-elements/CSCurrentDefense";
import { CSMaxDefense } from "./defense-elements/CSMaxDefense";
import { CSDefenseBonus } from "./defense-elements/CSDefenseBonus";
import { CSDefenseControl } from "./defense-elements/CSDefenseControl";
import Image from "../../../assets/images/charsheet/Defense_Background_shield.png";

export default function CSDefense() {
  return (
    <Paper sx={{ padding: "15px" }}>
      <Grid container rowSpacing={1} spacing={1}>
        <Grid xs={4}>
          <CSDefenseControl />
        </Grid>
        <Grid
          container
          xs={8}
          sx={{
            style: {
              backgroundImage: `url(${Image})`,
            },
          }}
        >
          <Grid xs={6}>
            <CSCurrentDefense />
          </Grid>
          <Grid xs={6}>
            <CSMaxDefense />
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <CSDefenseBonus />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
