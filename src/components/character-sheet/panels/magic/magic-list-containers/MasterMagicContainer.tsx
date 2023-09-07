import { Card, Paper, Stack, Typography } from "@mui/material";
import { AddButton } from "../../../../global-components/AddButton";
import { MagicSpellComponent } from "../magic-components/MagicSpellComponent";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function MasterMagicContainer() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let int = 0;

  async function newSpellbookMagic(int: number, type: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
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

  int = characterState.spellbook.masterMagic.length;

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
        <Paper elevation={2} sx={{ padding: 1, paddingBottom: 0.5 }}>
          <Typography
            variant="caption"
            sx={{
              alignItems: "center",
              marginLeft: 4,
              marginRight: 0.1,
              fontSize: "20px",
            }}
          >
            Magia de Maestro
          </Typography>
          <AddButton
            clicHandler={() => addSpellbookMagic(int, "masterMagic")}
          />
        </Paper>
        <Card>
          <MagicSpellComponent type={"masterMagic"} />
          {/* <MagicListContainer /> */}
        </Card>
      </Stack>
    </Card>
  );
}
