import { TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

export const HeroClimbingSpeed = () => {
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
      id="info-velocity-climb"
      color="secondary"
      label="Escalado"
      variant="outlined"
      type="number"
      name="climbingSpeed"
      value={characterState.speed.climbingSpeed.value}
      onChange={handleSpeeds}
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
