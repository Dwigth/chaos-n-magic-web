import { Grid, TextField, Typography, styled } from "@mui/material";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import { useParams } from "react-router-dom";

/** DEFENSA MÁXIMA
 *  La defensa máxima consiste en dos números:
 * - Defensa Máxima base
 * - bono de Defensa Máxima.
 * La Defensa Máxima será "Teórica", Defensa Máxima base + Bono de Defensa Máxima.
 * Nos da un Número Total y ese total es el que actualiza la Defensa Actual.
 */

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRadius: 100,
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
  },
});

export const CSMaxDefense = () => {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  async function putDefenseValues(name: string, val: string) {
    try {
      await fetch("http://localhost:3000/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["defense", name],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleDefenseMax = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(100, Number(event.target.value)));
    characterDispatch({
      type: "update_max_defense",
      payload: {
        name,
        value,
      },
    });
  };

  return (
    <>
      <Typography variant="caption">Defensa Máxima</Typography>
      <Grid container direction="row">
        <Grid item xs={6}>
          <CssTextField
            fullWidth
            type="number"
            id="defensaMax"
            name="max"
            value={characterState.defense.max}
            onChange={handleDefenseMax}
            onBlur={() => putDefenseValues("max", characterState.defense.max)}
            inputProps={{
              style: {
                paddingLeft: "25%",
                paddingRight: "auto",
                justifyContent: "center",
                alignContent: "center",
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <CssTextField
            size="small"
            type="number"
            label="Bono"
            name="maxBonus"
            id="defensamaxbonus"
            value={characterState.defense.maxBonus}
            onChange={handleDefenseMax}
            onBlur={() =>
              putDefenseValues("maxBonus", characterState.defense.maxBonus)
            }
            InputLabelProps={{
              style: {
                fontSize: 13,
                top: "10%",
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
