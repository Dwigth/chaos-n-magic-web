import { TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

export const HeroWalkingSpeed = () => {
  const { characterState, characterDispatch } = useCharacter();

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
      InputLabelProps={{
        style: {
          fontSize: 14,
        },
      }}
      fullWidth
    />
  );
};
