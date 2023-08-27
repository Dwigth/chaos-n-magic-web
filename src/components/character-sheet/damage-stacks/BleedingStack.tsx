import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const VerticalProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "red",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "red",
  },
  transform: "rotate(-90deg) translate(55%) scaleX(50%)",
  width: "100%",
  zIndex: 0,
  backgroundImage: "url('/src/assets/images/charsheet/Bar_Bleeding.png')",
  position: "relative",
});

function BleedingStack() {
  return (
    <>
      <img
        src="/src/assets/images/charsheet/Bar_Bleeding.png"
        width={"100%"}
        style={{
          zIndex: 5,
          display: "block",
          position: "relative",
        }}
      />
      <VerticalProgress variant="determinate" value={100} /*Value = Máximo/100 * Stack actual */ />
    </>
  );
}

export function BleedingStackElement(){
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
          8
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ width: "150%", marginTop: -3, marginBottom: -1.5 }}
      >
        <BleedingStack />
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
            defaultValue={0}
            inputProps={{
              style: { fontSize: "10px", width: "100%"},
              inputProps: { max: 10, min: 0, step: 1 },
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
