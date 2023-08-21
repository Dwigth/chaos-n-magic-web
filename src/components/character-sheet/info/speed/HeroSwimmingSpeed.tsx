import { TextField } from "@mui/material";

export function HeroSwimmingSpeed() {
  return (
    <TextField
      fullWidth
      id="info-velocity-swimming"
      name="info-velocity-swimming"
      color="secondary"
      label="Nado"
      variant="outlined"
      type="number"
      defaultValue="0"
    />
  );
}
