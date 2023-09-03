import { TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

export const HeroSwimmingSpeed = () => {
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
      fullWidth
      id="info-velocity-swimming"
      color="secondary"
      label="Nado"
      variant="outlined"
      type="number"
      name="swimmingSpeed"
      value={characterState.speed.swimmingSpeed.value}
      onChange={handleSpeeds}
    />
  );
};
