import { Grid, Paper, Typography } from "@mui/material";
import { CSMilestones } from "./CSMilestones";
import { LevelTextField } from "./CSLevelTextField";

import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

export function CSLevelControl() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putMilestone(int: number, val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["milestones", int, "exampleMilestone"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChecked = (event: any, int: number) => {
    const { checked } = event.target;
    characterDispatch({
      type: "update_milestone",
      payload: {
        checked,
        int,
      },
    });
    putMilestone(int, checked);
  };

  return (
    <Paper elevation={1} style={{ padding: "5%" }}>
      <Grid container spacing={1} direction="row" alignItems={"flex-start"}>
        <Grid item container direction={"column"} xs={8}>
          <Grid item xs={12}>
            <Typography> Hitos </Typography>
          </Grid>
          <Grid item container xs={12} direction="row" columns={5}>
            {characterState.milestones.map(({}, index: number) => {
              return (
                <Grid item xs={1} key={index}>
                  <CSMilestones
                    checked={characterState.milestones[index].exampleMilestone}
                    onChange={(e) => handleChecked(e, index)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <LevelTextField />
        </Grid>
      </Grid>
    </Paper>
  );
}
