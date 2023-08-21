import { TextField } from "@mui/material";

export function HeroClimbingSpeed() {
  return (
    <TextField
      fullWidth
      id="info-velocity-climb"
      name="info-velocity-climb"
      color="secondary"
      label="Escalado"
      variant="outlined"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        style: {
          maxWidth: "100%",
          fontSize: 13,
          marginTop: "3px",
          left: "-5px",
        },
      }}
    />
  );
}
