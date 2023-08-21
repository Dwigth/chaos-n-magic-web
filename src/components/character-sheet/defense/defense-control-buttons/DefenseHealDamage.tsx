import { Button, ButtonGroup } from "@mui/material";

/** BOTONES DE DAÑO
 * Estos botones son útiles cuando se tengan que reducir puntos de Defensa demasiado altos
 * así evitamos que el jugador tenga que sumar y restar por si mismo.
 * Función de los Botones:
 * - Curar: Este botón tomará el número que proviene del Textfield de arriba y sumará
 * de la Defensa actual, teniendo en cuenta que no puede ser mayor al Total de Defensa. 
 */

export function DefenseHealDamage() {
  return (
    <ButtonGroup size="small" variant="contained">
      <Button variant="contained" color="error">
        Daño
      </Button>
      <Button variant="contained" color="success">
        Curar
      </Button>
    </ButtonGroup>
  );
}
