import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface data {
  Datos: any;
}

export const HeroSwimmingSpeed: FC<data> = ({ Datos }) => {
  const [swimSpeed, setSwimSpeed] = useState(
    Datos.heroBasicInfo.speed.swimmingSpeed.value
  );

  const handleSpeed = (event: any) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    setSwimSpeed(value);
  };
  return (
    <TextField
      fullWidth
      id="info-velocity-swimming"
      name="info-velocity-swimming"
      color="secondary"
      label="Nado"
      variant="outlined"
      type="number"
      value={swimSpeed}
      onChange={handleSpeed}
    />
  );
};
