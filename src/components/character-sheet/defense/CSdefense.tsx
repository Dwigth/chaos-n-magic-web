import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { CSCurrentDefense } from "./defense-elements/CSCurrentDefense";
import { CSMaxDefense } from "./defense-elements/CSMaxDefense";
import { CSDefenseBonus } from "./defense-elements/CSDefenseBonus";
import { CSDefenseControl } from "./defense-elements/CSDefenseControl";
import Image from "../../../assets/images/charsheet/Defense_Background_shield.png";
import { useState } from "react";

let defenseAct = 0;

export default function CSDefense() {
  const [defData, setDataDef] = useState(0);

  const [bonoData, setDataBono] = useState(0);

  const [bonusData, setDataBonus] = useState(0);

  // const [newBonusData, setNewDataBonus] = useState(0);

  const [amountDef, setAmountDef] = useState(0);

  let allDef = Number(defData) + Number(bonoData);
  let newDef = bonusData;

  defenseAct = Number(defData) + Number(bonoData);

  let NewBonus = 0;

  if (amountDef != 0) {
    defenseAct = amountDef;
    newDef = NewBonus;
    if (bonusData != 0) {
      newDef = NewBonus;
    }

    // console.log("Bonus final: " + newDef);
  }

  return (
    <Paper sx={{ padding: "15px" }}>
      <Grid container rowSpacing={1} spacing={1}>
        <Grid xs={4}>
          <CSDefenseControl
            getBonus={newDef}
            actualDefense={defenseAct}
            totalDefense={allDef}
            sendNewDefense={(dmHl) => setAmountDef(dmHl)}
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
            <CSMaxDefense
              defMax={(d) => setDataDef(d)}
              defBono={(bon) => setDataBono(bon)}
            />
          </Grid>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <CSDefenseBonus
              bonus={(bonusSh) => setDataBonus(bonusSh)}
              actBonus={NewBonus}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
