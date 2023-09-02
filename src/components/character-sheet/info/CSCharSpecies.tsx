import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface Especie {
  Datos: any;
}

export const CSCharSpecies: FC<Especie> = ({ Datos }) => {
  const [specie, setSpecie] = useState(
    Datos.heroBasicInfo.specie ? Datos.heroBasicInfo.specie : ""
  );

  const handleChange = (event: any) => {
    setSpecie(event.target.value as string);
  };
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-specie"
      label="Especie"
      variant="outlined"
      name="info-specie"
      value={specie}
      onChange={handleChange}
    />
  );
};
