import { Box, LinearProgress, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PowerField, PowerFieldLabel } from "./PowerInputStyle";
import { FC, useState } from "react";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";

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
  transform: "rotate(-90deg) translate(55%) scaleX(80%) scaleY(2400%)",
  height: "3%",
  width: "100%",
  left: "9%",
  zIndex: 0,
  position: "relative",
  WebkitMask: "radial-gradient(circle, black 100%, rgba(0,0,0,1) 100%)",
  WebkitBorderRadius: "50%",
});

interface Value {
  powerValue: number;
}
export const PowerKiBar: FC<Value> = ({ powerValue }) => {
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

export const PowerKi = () => {
  const [pwChaos, setPwChaos] = useState({ actual: 0 });
  const { characterState, characterDispatch } = useCharacter();

  const handleMax = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    console.log({ name });
    characterDispatch({
      type: "update_powers",
      payload: {
        name,
        value,
      },
    });
  };

  const handleActual = (event: any) => {
    const { name } = event.target;
    const value = Math.max(
      0,
      Math.min(characterState.powers.ki.value, Number(event.target.value))
    );
    setPwChaos((pwChaos) => {
      return { ...pwChaos, [name]: value };
    });
  };

  let setPowerProgress =
    (pwChaos.actual / characterState.powers.ki.value) * 100;

  return (
    <Box>
      <Grid2
        container
        spacing={0}
        justifyContent={"center"}
        alignItems={"stretch"}
      >
        <Grid2 xs={12}>
          <PowerKiBar powerValue={setPowerProgress} />
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
            htmlFor="maxki-input"
            style={{ fontSize: "" }}
          >
            Max
          </PowerFieldLabel>
          <PowerField
            id="maxki-input"
            name="ki"
            type="number"
            value={characterState.powers.ki.value}
            onChange={handleMax}
            variant="outlined"
            color="secondary"
            size="small"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
