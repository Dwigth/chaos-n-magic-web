import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface Especie {
  Datos: any;
}

export const CSCharProfession: FC<Especie> = ({ Datos }) => {
  const [profesion, setProfession] = useState(
    Datos.heroBasicInfo.profession ? Datos.heroBasicInfo.profession : ""
  );

  const handleChange = (event: any) => {
    setProfession(event.target.value as string);
  };
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-profesion"
      label="Profesión"
      variant="outlined"
      type="text"
      name="info-profesion"
      value={profesion}
      onChange={handleChange}
    />
  );
};
