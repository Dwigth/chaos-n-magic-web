import {
  Grid,
  LinearProgress,
  TextField,
  Typography,
  styled,
} from "@mui/material";

const VerticalProgress = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "gray",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "purple",
  },
  transform: "rotate(-90deg) translate(55%) scaleX(50%)",
  width: "100%",
  zIndex: 0,
  backgroundImage: "url('/src/assets/images/charsheet/Bar_Psychic.png')",
  position: "relative",
});

function PsychicStack() {
  return (
    <>
      <img
        src="/src/assets/images/charsheet/Bar_Psychic.png"
        width={"100%"}
        style={{
          zIndex: 5,
          display: "block",
          position: "relative",
        }}
      />
      <VerticalProgress variant="determinate" value={100} />
    </>
  );
}

export function PsychicStackElement() {
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
          8
        </Typography>
      </Grid>
      <Grid
        item
        xs={10}
        sx={{ width: "150%", marginTop: -3, marginBottom: -1.5 }}
      >
        <PsychicStack />
      </Grid>
      <Grid item xs={1}>
        <TextField
          variant="outlined"
          color="secondary"
          size="small"
          type="number"
          defaultValue={0}
          inputProps={{
            style: { fontSize: "10px", width: "100%" },
            inputprops: { max: 10, min: 10, step: 1 },
          }}
          InputLabelProps={{ style: { fontSize: "8px" } }}
        />
      </Grid>
    </Grid>
  );
}
