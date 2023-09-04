import { Grid, InputAdornment, TextField, Typography } from "@mui/material";

export function CSMoneyField() {
  return (
    <Grid container direction="row" spacing={1} justifyContent={"flex-end"} alignItems="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <Typography variant="body2" color="success" justifyContent={"right"}>
            Riquezas
        </Typography>
      </Grid>
      <Grid item xs={6} md={6}>
        <TextField variant="standard" placeholder=" 0" InputProps={{
            startAdornment: <InputAdornment position="start">¢</InputAdornment>,
          }} fullWidth/>
      </Grid>
    </Grid>
  );
}
