import { TextField } from "@mui/material";

export function HeroSwimmingSpeed() {
  return (
    <TextField
      fullWidth
      id="info-velocity-swimming"
      label="Nado"
      variant="outlined"
      type="number"
      name="info-velocity-swimming"
      defaultValue="0"
    />
  );
}
