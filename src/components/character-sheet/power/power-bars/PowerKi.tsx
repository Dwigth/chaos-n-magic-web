import { Box, LinearProgress, TextField, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PowerField, PowerFieldLabel } from "./PowerInputStyle";

const PowerBar = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#fffde7",
    height: "100%",
    width: "100%",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "transparent",
  },
  backgroundColor: "transparent",
  transform: "rotate(-90deg) translate(55%) scaleX(80%) scaleY(3000%)",
  height: "3%",
  width: "100%",
  left: "12%",
  zIndex: 0,
  position: "relative",
  WebkitMask: "radial-gradient(circle, black 100%, rgba(0,0,0,1) 100%)",
  WebkitBorderRadius: "50%",
});
export function PowerKiBar() {
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

export function PowerKi() {
  return (
    <Box>
      <Grid2
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Grid2 xs={12}>
          <PowerKiBar />
        </Grid2>
        <Grid2 xs={6}>
          <PowerFieldLabel
            shrink
            htmlFor="curmana-input"
            style={{ fontSize: "0.7rem", marginBottom: "-10%" }}
          >
            Actual
          </PowerFieldLabel>
          <PowerField variant="outlined" color="secondary" size="small" />
        </Grid2>
        <Grid2 xs={6}>
          <PowerFieldLabel
            shrink
            htmlFor="maxki-input"
            style={{ fontSize: "" }}
          >
            Max
          </PowerFieldLabel>
          <PowerField
            id="maxki-input"
            variant="outlined"
            color="secondary"
            size="small"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
