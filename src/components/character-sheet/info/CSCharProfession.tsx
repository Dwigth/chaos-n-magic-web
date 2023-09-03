import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

export const CSCharProfession = () => {
  const { characterState, characterDispatch } = useCharacter();

  const handleChange = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_profession",
      payload: value,
    });
  };

  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-profesion"
      label="Profesión"
      variant="outlined"
      type="text"
      name="info-profesion"
      value={characterState.profession}
      onChange={handleChange}
    />
  );
};
