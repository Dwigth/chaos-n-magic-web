import { TextField } from "@mui/material";

export function HeroWalkingSpeed() {
  return (
    <TextField
      id="info-velocity-run"
      name="info-velocity-run"
      label="Correr"
      variant="outlined"
      color="secondary"
      type="number"
      defaultValue="0"
      InputLabelProps={{
        style: {
          fontSize: 14,
        },
      }}
      fullWidth
    />
  );
}
