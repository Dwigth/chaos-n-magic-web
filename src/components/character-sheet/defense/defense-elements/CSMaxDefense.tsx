import {  Grid, TextField, Typography, styled } from "@mui/material";

/** DEFENSA MÁXIMA
 *  La defensa máxima consiste en dos números:
 * - Defensa Máxima base
 * - bono de Defensa Máxima.
 * La Defensa Máxima será "Teórica", Defensa Máxima base + Bono de Defensa Máxima.
 * Nos da un Número Total y ese total es el que actualiza la Defensa Actual.
 */

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
      borderRadius: 100,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});


export function CSMaxDefense() {
  return (
    <>
      <Typography variant="caption">Defensa Máxima</Typography>
      <Grid container direction="row">
        <Grid item xs={7}>
          <CssTextField
            fullWidth
            type="number"
            id="defensaMax"
            defaultValue={0}
          />
        </Grid>
        <Grid item xs={5}>
          <CssTextField
            size="small"
            type="number"
            label="Bono"
            id="defensamaxbonus"
            defaultValue={0}
            InputLabelProps={{
              style:{
                fontSize: 13,
                top: '10%'
              }
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
