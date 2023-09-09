import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState } from "react";
import { useCharacter } from "../reducer-context/CharacterContextProvider";
import Bleeding from "/src/assets/images/charsheet/Bar_Bleeding.png";

const VerticalProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "red",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "red",
  },
  transform: "rotate(-90deg) translate(55%) scaleX(55%) scaleY(180%)",
  width: "100%",
  zIndex: 0,
  backgroundImage: `url(${Bleeding})`,
  position: "relative",
});

interface Resistence {
  resistence: number;
  actValue: number;
}

const BleedingStack: FC<Resistence> = ({ resistence, actValue }) => {
  let progess = (actValue / resistence) * 100;

  return (
    <>
      <img
        src={Bleeding}
        width={"100%"}
        style={{
          zIndex: 5,
          display: "block",
          position: "relative",
        }}
      />
      <VerticalProgress
        variant="determinate"
        value={progess} /*Value = Máximo/100 * Stack actual */
      />
    </>
  );
};

let combat = 0;

export const BleedingStackElement = () => {
  const { characterState } = useCharacter();

  let resistence = 6 + Number(characterState.attributes.combat.value);

  if (characterState.attributes.combat.value >= -2) {
    combat = characterState.attributes.combat.value;
  } else {
    combat = -2;
  }

  const [stackValue, setStackValue] = useState({
    bleeding: 0,
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
      textAlign={"center"}
      spacing={1}
    >
      <Grid item xs={1}>
        <Typography variant="caption" textAlign={"center"}>
          {6 + combat}
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ width: "150%", marginTop: -3, marginBottom: -1.5 }}
      >
        <BleedingStack resistence={resistence} actValue={stackValue.bleeding} />
      </Grid>
      <Grid
        container
        item
        xs={1}
        direction={"row"}
        alignItems={"stretch"}
        justifyContent={"center"}
      >
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            type="number"
            name="bleeding"
            value={stackValue.bleeding}
            onChange={handleChange}
            inputProps={{
              style: { fontSize: "10px", width: "100%" },
              inputprops: { max: 10, min: 0, step: 1 },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
