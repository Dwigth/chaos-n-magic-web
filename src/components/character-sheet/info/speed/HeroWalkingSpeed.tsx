import { TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const HeroWalkingSpeed = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putSpeedsValue(name: string, val: string) {
    try {
      const response = await fetch(
        import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            heroSheetId: params.sheetId,
            propertyToUpdate: ["speed", name, "value"],
            value: val,
          }),
        }
      );

      if (response.ok) {
        console.log("Se actualizo " + name + " a: " + val);
      } else {
        console.log("Error al actualizar");
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleSpeeds = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    characterDispatch({
      type: "update_speeds",
      payload: {
        name,
        value,
      },
    });
  };
  return (
    <TextField
      id="info-velocity-run"
      label="Correr"
      variant="outlined"
      color="secondary"
      type="number"
      name="walkingSpeed"
      value={characterState.speed.walkingSpeed.value}
      onChange={handleSpeeds}
      onBlur={() =>
        putSpeedsValue("walkingSpeed", characterState.speed.walkingSpeed.value)
      }
      InputLabelProps={{
        style: {
          fontSize: 14,
        },
      }}
      fullWidth
    />
  );
};
