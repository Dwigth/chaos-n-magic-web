// Botón de Clonar Personaje

import { Button, Grid, TextField, Box, Alert, Collapse } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CloneCharacterSheet() {
  const [cloneCS, setNewClone] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);
  let navigate = useNavigate();

  const routeChange = (id: string, passCode: string) => {
    let path = `/characterSheet/${id}`;
    navigate(path, {
      state: {
        passCode: passCode,
      },
    });
  };

  async function submitCloneCS() {
    try {
      const response = await fetch(
        "http://localhost:3000/hero-sheet/duplicate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            heroSheetId: cloneCS,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log({ data });
        routeChange(data.newHeroSheetId, "10258");
      } else {
        setError("Esta hoja de personaje no esta disponible");
        setOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClone = (event: any) => {
    const value = event.target.value as string;
    setNewClone(value);
  };

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        padding: "5px",
      }}
    >
      <Grid container>
        <Grid item xs={10}>
          <TextField
            variant="filled"
            fullWidth
            className="input-text"
            placeholder="Clonar Hoja"
            value={cloneCS}
            onChange={handleClone}
          ></TextField>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={submitCloneCS}
            style={{
              minWidth: "50%",
              minHeight: "100%",
            }}
          >
            Clonar Personaje
          </Button>
        </Grid>
      </Grid>
      {error ? (
        <Collapse in={open}>
          <Alert onClose={() => setOpen(false)} severity="error">
            {error}
          </Alert>
        </Collapse>
      ) : null}
    </Box>
  );
}
