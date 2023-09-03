import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

export const CSCharName = () => {
  const { characterState, characterDispatch } = useCharacter();

  const handleCSName = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_name",
      payload: value,
    });
  };

  return (
    <TextField
      id="info-name"
      variant="outlined"
      color="secondary"
      fullWidth
      label="Nombre del personaje"
      value={characterState.characterName}
      onChange={handleCSName}
      type="text"
      name="infoName"
    />
  );
};
