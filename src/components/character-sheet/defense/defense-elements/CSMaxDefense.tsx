import { Grid, TextField, Typography, styled } from "@mui/material";
import { FC, useState } from "react";

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

interface Props {
  defMax: (def: number) => void;
  defBono: (bon: number) => void;
}

export const CSMaxDefense: FC<Props> = ({ defMax, defBono }) => {
  const [maxDefense, setMaxDefense] = useState({ defense: 0, bono: 0 });

  const currentDef = (val: number) => {
    defMax(val);
  };

  const currentBono = (val: number) => defBono(val);

  const handleDefense = (event: any) => {
    const { name, value } = event.target;
    setMaxDefense((maxDefense) => {
      return { ...maxDefense, [name]: value };
    });

    currentDef(value);
  };

  const handleBono = (event: any) => {
    const { name, value } = event.target;
    setMaxDefense((maxDefense) => {
      return { ...maxDefense, [name]: value };
    });
    currentBono(value);
  };

  return (
    <>
      <Typography variant="caption">Defensa Máxima</Typography>
      <Grid container direction="row">
        <Grid item xs={7}>
          <CssTextField
            fullWidth
            type="number"
            id="defensaMax"
            name="defense"
            defaultValue={maxDefense.defense}
            onChange={handleDefense}
            // onClick={() => defMax(maxDefense.defense)}
          />
        </Grid>
        <Grid item xs={5}>
          <CssTextField
            size="small"
            type="number"
            label="Bono"
            name="bono"
            id="defensamaxbonus"
            defaultValue={maxDefense.bono}
            onChange={handleBono}
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
