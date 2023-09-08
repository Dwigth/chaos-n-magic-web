import { TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export const HeroClimbingSpeed = () => {
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
      fullWidth
      id="info-velocity-climb"
      color="secondary"
      label="Escalado"
      variant="outlined"
      type="number"
      name="climbingSpeed"
      value={characterState.speed.climbingSpeed.value}
      onChange={handleSpeeds}
      onBlur={() =>
        putSpeedsValue(
          "climbingSpeed",
          characterState.speed.climbingSpeed.value
        )
      }
      InputLabelProps={{
        style: {
          maxWidth: "100%",
          fontSize: 13,
          marginTop: "3px",
          left: "-5px",
        },
      }}
    />
  );
};
