// En este scripto estará la ventana de selección de menú.
/* Crear nuevo Personaje */
/* Clonar Personaje */
/* Abrir Personaje */

import { Button, Typography } from "@mui/material";
// import { useEffect } from "react";

// CREAR NUEVO PERSONAJE

// http://localhost:3000/hero-sheet

export function CreateNewCharacterSheet() {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        minWidth: "100%",
        maxWidth: "100%",
      }}
      onClick={() => {
        console.log(
          "Ejecutar generación de ID, ejecutar creación de hoja, mandar a hoja vacía"
        );
      }}
    >
      <Typography variant="h4"> Crear Personaje</Typography>
    </Button>
  );
}

// Clase CSS widebutton, es un botón grande y verde (Dejo esta nota solo para recordatorio para crear el css)
