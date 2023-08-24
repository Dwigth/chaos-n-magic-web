import { Button, ButtonGroup } from "@mui/material";
import { FC } from "react";

/** BOTONES DE DAÑO
 * Estos botones son útiles cuando se tengan que reducir puntos de Defensa demasiado altos
 * así evitamos que el jugador tenga que sumar y restar por si mismo.
 * Función de los Botones:
 * - Curar: Este botón tomará el número que proviene del Textfield de arriba y sumará
 * de la Defensa actual, teniendo en cuenta que no puede ser mayor al Total de Defensa.
 */

interface Props {
  setAccion: (accion: string) => void;
}

export const DefenseHealDamage: FC<Props> = ({ setAccion }) => {
  const doAction = (val: string) => {
    setAccion(val);
  };

  return (
    <ButtonGroup size="small" variant="contained">
      <Button
        variant="contained"
        color="error"
        onClick={() => doAction("Daño")}
      >
        Daño
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => doAction("Curar")}
      >
        Curar
      </Button>
    </ButtonGroup>
  );
};
