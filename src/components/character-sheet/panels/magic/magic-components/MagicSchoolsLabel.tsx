import { TextField } from "@mui/material";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function MagicSchoolsLabel() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putSpellbook(val: any) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["spellbook", "magicSchools", "0"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleMagicSchool = (event: any) => {
    const value = event.target.value;
    characterDispatch({
      type: "update_magicSchools",
      payload: {
        value,
      },
    });
  };

  return (
    <TextField
      variant="outlined"
      color="secondary"
      label="Escuelas de Magia"
      InputLabelProps={{
        shrink: true,
      }}
      placeholder="Escuela de lo Arcano...
Escuela de lo Divino..."
      multiline
      minRows={2}
      maxRows={4}
      value={characterState.spellbook.magicSchools[0]}
      onChange={handleMagicSchool}
      onBlur={() => putSpellbook(characterState.spellbook.magicSchools[0])}
      fullWidth
    />
  );
}
