import { Box, LinearProgress, TextField, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

const PowerBar = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#33eaff",
    width: '100%',
    height: '100%',
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "transparent",
    width: '100%',
  },
  backgroundColor: "transparent",
  transform: "rotate(-90deg) translate(55%) scaleX(80%) scaleY(3000%)",
  height: 2.5,
  width: "100%",
  zIndex: 0,
  left: "0%",
  position: "relative",
  WebkitMask: "radial-gradient(circle, black 100%, rgba(0,0,0,1) 100%)",
  WebkitBorderRadius: "100%",
});

export function PowerManaBar() {
  return (
    <>
      <img
        src="/src/assets/images/charsheet/Power_Bar_round.png"
        width={"110%"}
        style={{
          zIndex: 5,
          display: "block",
          position: "relative",
        }}
        draggable="false"
      ></img>
      <PowerBar variant="determinate" value={50} />
    </>
  );
}

export function PowerMana() {
  return (
    <Box>
      <Grid2
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Grid2 xs={12}>
          <PowerManaBar />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            label="Maná"
            inputProps={{
              style: {
                fontSize: "10px",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "8px",
              },
            }}
          />
        </Grid2>
        <Grid2 xs={6}>
          <TextField
            variant="outlined"
            color="secondary"
            size="small"
            label="Max"
            inputProps={{
              style: {
                fontSize: "10px",
              },
            }}
            InputLabelProps={{
              style: {
                fontSize: "8px",
              },
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
