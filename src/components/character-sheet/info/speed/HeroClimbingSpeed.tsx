import { TextField } from "@mui/material";

export function HeroClimbingSpeed() {
  return (
    <TextField
      fullWidth
      id="info-velocity-climb"
      label="Escalado"
      variant="outlined"
      type="number"
      name="info-velocity-climb"
      defaultValue="0"
      InputLabelProps={{
        style:{
            maxWidth: '100%',
            fontSize: 13,
            marginTop: '3px',
            left: '-5px'
        }
      }}
    />
  );
}
