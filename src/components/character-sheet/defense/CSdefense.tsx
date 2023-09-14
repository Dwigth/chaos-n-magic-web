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
    <Paper sx={{ padding: "10px", height: "100%" }}>
      <Grid
        xs={16}
        sm={13}
        md={15}
        lg={15}
        xl={15}
        container
        rowSpacing={1}
        spacing={1}
      >
        <Grid xs={12} sm={3} md={3} lg={3} xl={3}>
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
          xs={9}
          sx={{
            style: {
              backgroundImage: `url(${Image})`,
            },
          }}
        >
          {/* <Grid xs={12} sm={12} md={12} lg={15} xl={8}> */}
          <Grid xs={12} sm={4} md={3} lg={3} xl={3}>
            <CSCurrentDefense actDef={defenseAct} />
          </Grid>
          <Grid xs={12} sm={8} md={6} lg={6} xl={6}>
            <CSMaxDefense />
          </Grid>
          <Grid xs={3.3}></Grid>
          <Grid xs={12} sm={5} md={4} lg={4} xl={4}>
            <CSDefenseBonus
              bonus={(bonusSh) => setDataBonus(bonusSh)}
              actBonus={bonusData}
            />
          </Grid>
          {/* </Grid> */}
        </Grid>
      </Grid>
    </Paper>
  );
}
