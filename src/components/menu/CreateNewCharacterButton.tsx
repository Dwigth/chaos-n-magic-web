// En este scripto estará la ventana de selección de menú.
/* Crear nuevo Personaje */
/* Clonar Personaje */
/* Abrir Personaje */

import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { defaultData } from "../character-sheet/reducer-context/defaultData";
// import { useEffect } from "react";

// CREAR NUEVO PERSONAJE

// http://localhost:3000/hero-sheet

export function CreateNewCharacterSheet() {
  let navigate = useNavigate();

  const routeChange = (id: any, passCode: any) => {
    let path = `/characterSheet/${id}`;
    navigate(path, {
      state: {
        passCode: passCode,
      },
    });
  };

  async function submitDatabase() {
    try {
      const response = await fetch("http://localhost:3000/hero-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheetPasscode: "22533",
          heroBasicInfo: defaultData,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        routeChange(data.sheetId, data.sheetPasscode);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
      }}
      onClick={() => {
        submitDatabase();
      }}
    >
      <Typography variant="h4"> Crear Personaje</Typography>
    </Button>
  );
}

// Clase CSS widebutton, es un botón grande y verde (Dejo esta nota solo para recordatorio para crear el css)
