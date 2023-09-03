import { TextField } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

export const CSCharSpecies = () => {
  const { characterState, characterDispatch } = useCharacter();

  const handleChange = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_specie",
      payload: value,
    });
  };
  return (
    <TextField
      color="secondary"
      fullWidth
      id="info-specie"
      label="Especie"
      variant="outlined"
      name="info-specie"
      value={characterState.specie}
      onChange={handleChange}
    />
  );
};
