import { Box, LinearProgress, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PowerField, PowerFieldLabel } from "./PowerInputStyle";
import { FC, useState } from "react";

const PowerBar = styled(LinearProgress)({
  "& .MuiLinearProgress-barColorPrimary": {
    backgroundColor: "#33eaff",
    width: "100%",
    height: "100%",
  },
  "& .MuiLinearProgress-colorPrimary": {
    backgroundColor: "transparent",
  },
  backgroundColor: "transparent",
  transform: "rotate(-90deg) translate(55%) scaleX(80%) scaleY(2500%)",
  height: "3%",
  width: "100%",
  left: "2%",
  zIndex: 0,
  position: "relative",
  WebkitMask: "radial-gradient(circle, black 100%, rgba(0,0,0,1) 100%)",
  WebkitBorderRadius: "50%",
});

interface Value {
  powerValue: number;
}
export const PowerManaBar: FC<Value> = ({ powerValue }) => {
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
      <PowerBar variant="determinate" value={powerValue} />
    </>
  );
};

export function PowerMana() {
  const [pwChaos, setPwChaos] = useState({ actual: 0, max: 0 });

  const handleMax = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    setPwChaos((pwChaos) => {
      return { ...pwChaos, [name]: value };
    });
  };

  const handleActual = (event: any) => {
    const { name } = event.target;
    const value = Math.max(
      0,
      Math.min(pwChaos.max, Number(event.target.value))
    );
    setPwChaos((pwChaos) => {
      return { ...pwChaos, [name]: value };
    });
  };

  let setPowerProgress = (pwChaos.actual / pwChaos.max) * 100;

  return (
    <Box>
      <Grid2
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Grid2 xs={12}>
          <PowerManaBar powerValue={setPowerProgress} />
        </Grid2>
        <Grid2 xs={6}>
          <PowerFieldLabel
            shrink
            htmlFor="curmana-input"
            style={{ fontSize: "0.7rem", marginBottom: "-10%" }}
          >
            Actual
          </PowerFieldLabel>
          <PowerField
            id="curmana-input"
            name="actual"
            type="number"
            value={pwChaos.actual}
            onChange={handleActual}
            variant="outlined"
            color="secondary"
            size="small"
          />
        </Grid2>
        <Grid2 xs={6}>
          <PowerFieldLabel
            shrink
            htmlFor="maxmana-input"
            style={{ fontSize: "" }}
          >
            Max
          </PowerFieldLabel>
          <PowerField
            name="max"
            type="number"
            value={pwChaos.max}
            onChange={handleMax}
            id="maxmana-input"
            variant="outlined"
            color="secondary"
            size="small"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
}
