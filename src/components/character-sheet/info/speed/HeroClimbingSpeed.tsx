import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface data {
  Datos: any;
}

export const HeroClimbingSpeed: FC<data> = ({ Datos }) => {
  const [climbSpeed, setClimbSpeed] = useState(
    Datos.heroBasicInfo.speed.climbingSpeed.value
  );

  const handleSpeed = (event: any) => {
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    setClimbSpeed(value);
  };

  console.log("velocidad de escalada: " + climbSpeed);

  return (
    <TextField
      fullWidth
      id="info-velocity-climb"
      name="info-velocity-climb"
      color="secondary"
      label="Escalado"
      variant="outlined"
      type="number"
      value={climbSpeed}
      onChange={handleSpeed}
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
};
