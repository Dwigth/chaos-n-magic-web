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

  const [amountDef, setAmountDef] = useState(0);

  let allDef = Number(defData) + Number(bonoData);

  defenseAct = Number(defData) + Number(bonoData);

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
            <CSMaxDefense
              defMax={(d) => setDataDef(d)}
              defBono={(bon) => setDataBono(bon)}
            />
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
