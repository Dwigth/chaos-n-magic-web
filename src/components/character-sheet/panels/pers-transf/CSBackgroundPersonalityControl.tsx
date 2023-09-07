import { Box, Grid, Typography } from "@mui/material";
import { CSCharBackground } from "./char-background-components/CSCharBackground";
import { CSCharWeight } from "./char-background-components/CSCharWeight";
import { CSCharImage } from "./char-background-components/CSCharImage";
import { CSCharHeight } from "./char-background-components/CSCharHeight";

export function CSBackgroundPersonalityControl() {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        spacing={1}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"stretch"}
      >
        <Grid item xs={12} sm={24} md={4} lg={4} xl={4}>
          <CSCharImage />
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={8}
          lg={8}
          xl={8}
          container
          spacing={0}
          direction="row"
          alignItems={"flex-end"}
          justifyContent={"flex-end"}
        >
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
            <CSCharWeight />
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5} xl={5}>
            <CSCharHeight />
          </Grid>
          <Grid item xs={11.8}>
            <Typography variant={"body1"} textAlign={"left"}>
              Trasfondo
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CSCharBackground />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
