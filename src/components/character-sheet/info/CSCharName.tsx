import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface Name {
  Datos: any;
}

export const CSCharName: FC<Name> = ({ Datos }) => {
  const Name = Datos.heroBasicInfo.characterName;

  const [CSName, setCSName] = useState({ infoName: Name });

  const handleCSName = (event: any) => {
    const { name, value } = event.target;

    setCSName(() => {
      return { ...CSName, [name]: value };
    });
  };

  return (
    <>
      <TextField
        id="info-name"
        variant="outlined"
        color="secondary"
        fullWidth
        label="Nombre del personaje"
        defaultValue={CSName.infoName}
        onChange={handleCSName}
        type="text"
        name="infoName"
      />
    </>
  );
};
