import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CSCurrentDefense } from "./defense-elements/CSCurrentDefense";
import { CSMaxDefense } from "./defense-elements/CSMaxDefense";
import { CSDefenseBonus } from "./defense-elements/CSDefenseBonus";
import { CSDefenseControl } from "./defense-elements/CSDefenseControl";
import Image from "../../../assets/images/charsheet/Defense_Background_shield.png";
import { useState } from "react";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

let defenseAct = 0;

export default function CSDefense() {
  const { characterState } = useCharacter();

  const [bonusData, setDataBonus] = useState(0);

  const [amountDef, setAmountDef] = useState(0);

  let allDef =
    Number(characterState.defense.max) +
    Number(characterState.defense.maxBonus);

  defenseAct =
    Number(characterState.defense.max) +
    Number(characterState.defense.maxBonus);

  if (amountDef != 0) {
    defenseAct = amountDef;
  }

  return (
    <Paper sx={{ padding: "20px", height: "100%" }}>
      <Grid container rowSpacing={1} spacing={1}>
        <Grid xs={4}>
          <CSDefenseControl
            getBonus={bonusData}
            actualDefense={defenseAct}
            totalDefense={allDef}
            sendNewDefense={(dmHl) => setAmountDef(dmHl)}
            sendNewBonus={(b) => setDataBonus(b)}
          />
        </Grid>
        <Grid
          container
          xs={8}
          sx={{
            style: {
              backgroundImage: `url(${Image})`,
            },
          }}
        >
          <Grid xs={6}>
            <CSCurrentDefense actDef={defenseAct} />
          </Grid>
          <Grid xs={6}>
            <CSMaxDefense />
          </Grid>
          <Grid xs={3}></Grid>
          <Grid xs={5}>
            <CSDefenseBonus
              bonus={(bonusSh) => setDataBonus(bonusSh)}
              actBonus={bonusData}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
