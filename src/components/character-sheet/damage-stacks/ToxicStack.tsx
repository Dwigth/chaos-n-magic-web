import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { FC, useState } from "react";

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
  backgroundImage: "url('/src/assets/images/charsheet/Bar_Toxic.png')",
  position: "relative",
});

interface Fortaleza {
  fortress: number;
}

interface Resistence {
  resistence: number;
  actValue: number;
}

const ToxicStack: FC<Resistence> = ({ resistence, actValue }) => {
  let progess = (actValue / resistence) * 100;

  return (
    <>
      <img
        src="/src/assets/images/charsheet/Bar_Toxic.png"
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

export const ToxicStackElement: FC<Fortaleza> = ({ fortress }) => {
  let resistence = 6 + Number(fortress);

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
          {resistence}
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
