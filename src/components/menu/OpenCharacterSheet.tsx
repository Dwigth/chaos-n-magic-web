// Botón con input para abrir hoja de Personaje
import {
  Button,
  Grid,
  TextField,
  Box,
  Typography,
  Alert,
  Collapse,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

interface PropID {
  Datos: (data: JSON) => void;
}

export const OpenCharacterSheet: FC<PropID> = ({ Datos }) => {
  const [CSId, setIdCS] = useState({ id: "", passCode: "" });
  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);

  const handleCSProps = (event: any) => {
    const { name, value } = event.target;
    setIdCS((CSId) => {
      return { ...CSId, [name]: value };
    });
  };

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `characterSheet`;
    navigate(path);
  };

  async function handleClick() {
    try {
      const response = await fetch(
        `http://localhost:3000/hero-sheet?hero-sheet-id=${CSId.id}`
      );

      // setIsLoading(false);
      if (response.ok) {
        const data = await response.json();
        Datos(data);
        console.log({ data });
        setError("");
        routeChange();
      } else {
        setError("Esta hoja de personaje no esta disponible");
        setOpen(true);
      }
    } catch (error) {
      setError("No se completo la solicitud para obtener los datos");
      setOpen(true);
    }
  }

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        paddingBottom: "10px",
        padding: "5px",
      }}
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={8}>
          <Typography variant="h4"> Abrir Personaje</Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={8}>
            <TextField
              variant="filled"
              name="id"
              fullWidth
              placeholder="Escribe el ID de tu Hoja"
              onChange={handleCSProps}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <TextField
              variant="filled"
              name="passCode"
              fullWidth
              id="charpass"
              className="input-text"
              placeholder="Clave"
              onChange={handleCSProps}
            ></TextField>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="primary"
              style={{
                minWidth: "100%",
                minHeight: "100%",
              }}
              onClick={handleClick}
            >
              Abrir
            </Button>
          </Grid>
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
};
