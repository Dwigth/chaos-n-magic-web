import { TextField } from "@mui/material";
import { FC, useState } from "react";

interface Name {
  Nombre: string;
}

export const CSCharName: FC<Name> = ({ Nombre }) => {
  const [CSName, setCSName] = useState({ infoName: "" });

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
        defaultValue={Nombre}
        onChange={handleCSName}
        type="text"
        name="infoName"
      />
    </>
  );
};
