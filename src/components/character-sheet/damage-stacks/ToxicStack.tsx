import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState } from "react";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import Toxic from "/src/assets/images/charsheet/Bar_Toxic.png";

const VerticalProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "purple",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "purple",
  },

  transform: "rotate(-90deg) translate(55%) scaleX(55%)",
  width: "100%",
  zIndex: 0,
  backgroundImage: `url(${Toxic})`,
  position: "relative",
});

interface Resistence {
  resistence: number;
  actValue: number;
}

const ToxicStack: FC<Resistence> = ({ resistence, actValue }) => {
  let progess = (actValue / resistence) * 100;

  return (
    <>
      <img
        src={Toxic}
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

let fortitude = 0;

export const ToxicStackElement = () => {
  const { characterState } = useCharacter();

  let resistence = 6 + Number(characterState.attributes.fortitude.value);

  if (characterState.attributes.fortitude.value >= -2) {
    fortitude = characterState.attributes.fortitude.value;
  } else {
    fortitude = -2;
  }

  const [stackValue, setStackValue] = useState({
    toxic: 0,
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
          {6 + fortitude}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ width: "150%", marginTop: -3, marginBottom: -1.5 }}
      >
        <ToxicStack resistence={resistence} actValue={stackValue.toxic} />
      </Grid>
      <Grid item xs={1}>
        <TextField
          variant="outlined"
          color="secondary"
          size="small"
          type="number"
          name="toxic"
          value={stackValue.toxic}
          onChange={handleChange}
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
