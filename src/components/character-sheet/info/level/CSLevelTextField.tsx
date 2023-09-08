import { Box, TextField } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function LevelTextField() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putCharacterLevel(event: any) {
    const value = event.target.value;
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["characterLevel"],
          value: value,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleCharacterLevel = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(20, Number(event.target.value)));
    characterDispatch({
      type: "update_character_level",
      payload: {
        name,
        value,
      },
    });
  };

  return (
    <Box
      alignItems={"center"}
      style={{
        width: "100%",
        height: "120%",
        marginTop: "5%",
      }}
    >
      <TextField
        type="number"
        variant="outlined"
        color="secondary"
        label="Nivel"
        name="characterLevel"
        value={characterState.characterLevel}
        onChange={handleCharacterLevel}
        onBlur={putCharacterLevel}
        style={{ maxWidth: "90%", minHeight: "100%", textAlign: "center" }}
      />
    </Box>
  );
}
