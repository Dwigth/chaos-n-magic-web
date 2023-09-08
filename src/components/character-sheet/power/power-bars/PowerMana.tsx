import { Box, LinearProgress, styled } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { PowerField, PowerFieldLabel } from "./PowerInputStyle";
import { FC, useState } from "react";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";
import PowerBarRound from "/src/assets/images/charsheet/Power_Bar_round.png";

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
  transform: "rotate(-90deg) translate(55%) scaleX(80%) scaleY(2600%)",
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
        src={PowerBarRound}
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

export const PowerMana = () => {
  const [pwChaos, setPwChaos] = useState({ actual: 0 });
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putPower(name: string, val: string) {
    try {
      const response = await fetch(
        import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            heroSheetId: params.sheetId,
            propertyToUpdate: ["powers", name, "value"],
            value: val,
          }),
        }
      );

      if (response.ok) {
        console.log("Se actualizo " + name);
      } else {
        console.log("Error al actualizar");
      }
    } catch (err) {
      console.log(err);
    }
  }

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
      Math.min(characterState.powers.manna.value, Number(event.target.value))
    );
    setPwChaos((pwChaos) => {
      return { ...pwChaos, [name]: value };
    });
  };

  let setPowerProgress =
    (pwChaos.actual / characterState.powers.manna.value) * 100;

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
            name="manna"
            type="number"
            value={characterState.powers.manna.value}
            onChange={handleMax}
            onBlur={() => putPower("manna", characterState.powers.manna.value)}
            id="maxmana-input"
            variant="outlined"
            color="secondary"
            size="small"
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};
