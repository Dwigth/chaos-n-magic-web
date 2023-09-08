import { Card, Paper, Stack, Typography } from "@mui/material";
import { AddButton } from "../../../../global-components/AddButton";
// import { MagicListContainer } from "./MagicListContainer";
import { MagicSpellComponent } from "../magic-components/MagicSpellComponent";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";

export function MinorMagicContainer() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let int = 0;

  async function newSpellbookMagic(int: number, type: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["spellbook", type, int],
          value: {
            name: "",
            cost: 0,
            time: 0,
            range: "",
            duration: "",
            ad: "",
            damage: "",
            description: "",
          },
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.spellbook.minorMagic.length;

  const addSpellbookMagic = (int: any, type: string) => {
    characterDispatch({
      type: "add_spellbook_magic",
      payload: {
        type,
      },
    });
    newSpellbookMagic(int, type);
  };

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <Stack spacing={1} sx={{}}>
        <Stack>
          <Paper elevation={2} sx={{ paddingTop: 1, paddingBottom: 0.5 }}>
            <Typography
              variant="caption"
              sx={{
                alignItems: "center",
                marginLeft: 9,
                marginRight: 2.5,
                fontSize: "20px",
              }}
            >
              Magia Menor
            </Typography>
            <AddButton
              clicHandler={() => addSpellbookMagic(int, "minorMagic")}
            />
          </Paper>
        </Stack>
        <Card style={{ padding: 0 }}>
          <MagicSpellComponent type={"minorMagic"} />
        </Card>
      </Stack>
    </Card>
  );
}
