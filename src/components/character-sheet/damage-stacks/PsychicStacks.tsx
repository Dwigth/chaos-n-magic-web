import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState } from "react";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import Psychic from "/src/assets/images/charsheet/Bar_Psychic.png";

const VerticalProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "gray",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "purple",
  },
  transform: "rotate(-90deg) translate(55%) scaleX(55%)",
  width: "100%",
  zIndex: 0,
  backgroundImage: `url(${Psychic})`,
  position: "relative",
});

interface Resistence {
  resistence: number;
  actValue: number;
}

const PsychicStack: FC<Resistence> = ({ resistence, actValue }) => {
  let progess = (actValue / resistence) * 100;

  return (
    <>
      <img
        src={Psychic}
        width={"100%"}
        style={{
          zIndex: 5,
          display: "block",
          position: "relative",
        }}
      />
      <VerticalProgress variant="determinate" value={progess} />
    </>
  );
};

let mind = 0;

export const PsychicStackElement = () => {
  const { characterState } = useCharacter();

  if (characterState.attributes.mind.value >= -2) {
    mind = characterState.attributes.mind.value;
  } else {
    mind = -2;
  }

  let resistence = 6 + mind;

  const [stackValue, setStackValue] = useState({
    psychic: 0,
  });

  const handleChange = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(resistence, Number(event.target.value)));
    setStackValue((stackValue) => {
      return { ...stackValue, [name]: value };
    });
  };

  return (
    <Grid
      container
      direction="column"
      alignItems={"center"}
      justifyContent={"center"}
      spacing={1}
    >
      <Grid item xs={1}>
        <Typography variant="caption" textAlign={"center"}>
          {6 + mind}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ width: "150%", marginTop: -3, marginBottom: -1.5 }}
      >
        <PsychicStack resistence={resistence} actValue={stackValue.psychic} />
      </Grid>
      <Grid item xs={1}>
        <TextField
          variant="outlined"
          color="secondary"
          size="small"
          type="number"
          name="psychic"
          onChange={handleChange}
          value={stackValue.psychic}
          inputProps={{
            style: { fontSize: "10px", width: "100%" },
            inputprops: { max: 10, min: 10, step: 1 },
          }}
          InputLabelProps={{ style: { fontSize: "8px" } }}
        />
      </Grid>
    </Grid>
  );
};
