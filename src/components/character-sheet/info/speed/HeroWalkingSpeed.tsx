import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface data {
  Datos: any;
}

export const HeroWalkingSpeed: FC<data> = ({ Datos }) => {
  const [walkSpeed, setWalkSpeed] = useState(
    Datos.heroBasicInfo.speed.swimmingSpeed.value
  );

  const handleSpeed = (event: any) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    setWalkSpeed(value);
  };
  return (
    <TextField
      id="info-velocity-run"
      name="info-velocity-run"
      label="Correr"
      variant="outlined"
      color="secondary"
      type="number"
      value={walkSpeed}
      onChange={handleSpeed}
      InputLabelProps={{
        style: {
          fontSize: 14,
        },
      }}
      fullWidth
    />
  );
};
