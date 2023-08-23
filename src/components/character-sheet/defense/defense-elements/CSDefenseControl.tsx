import { Grid, TextField, Typography, styled } from "@mui/material";
import { DefenseHealDamage } from "../defense-control-buttons/DefenseHealDamage";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 80,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});



export function CSDefenseControl() {
  return (
    <Grid container spacing={0} alignItems={"center"} justifyContent={"center"}>
      <Grid item xs={12}>
        <Typography variant="caption">Curar o Recibir Daño</Typography>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={8}>
      <CssTextField variant="outlined" />
      </Grid>
      <Grid item xs={2}/>
      <Grid item xs={12}>
        <DefenseHealDamage />
      </Grid>
    </Grid>
  );
}
