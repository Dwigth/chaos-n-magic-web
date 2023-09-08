import { Avatar, Grid, Typography } from "@mui/material";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import SenseHearingImage from "/src/assets/images/charsheet/Icon_Hearing.jpg";

let sns = 0;

export const SenseHearing = () => {
  const { characterState } = useCharacter();

  if (characterState.attributes.senses.value >= 0) {
    sns = characterState.attributes.senses.value;
  } else {
    sns = 0;
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent={"flex-start"}
      alignItems={"flex-start"}
      columns={16}
    >
      <Grid item xs={4}>
        <Avatar alt="hearing" src={SenseHearingImage} />
      </Grid>
      <Grid item xs={5}>
        <Typography variant="body2">{4 + sns}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography variant="body1">/</Typography>
      </Grid>
      <Grid item xs={5}>
        <Typography variant="body2">{8 + sns}</Typography>
      </Grid>
    </Grid>
  );
};
