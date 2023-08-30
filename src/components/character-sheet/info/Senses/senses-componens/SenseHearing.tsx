import { Avatar, Grid, Typography } from "@mui/material";

export function SenseHearing() {
  return (
    <Grid
      container
      direction="row"
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      columns={16}
    >
      <Grid item xs={4}>
        <Avatar
          alt="hearing"
          src="/src/assets/images/charsheet/Icon_Hearing.jpg"
        />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="body2">4+(S)entidos</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">/</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="body2">8+(S)entidos</Typography>
      </Grid>
    </Grid>
  );
}
