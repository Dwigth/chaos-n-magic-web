import { TextField, Typography, styled } from "@mui/material";
import { FC } from "react";

/** DEFENSA ACTUAL
 * La Defensa actual no puede ser mayor a la Defensa Máxima total (Defensa Max + Bono)
 * La Defensa actual se reinicia cada vez que empieza el turno del jugador
 * y Cada vez que el jugador pierde 1 Postura
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
  actDef: number;
}

export const CSCurrentDefense: FC<Props> = ({ actDef }) => {
  return (
    <>
      <Typography variant="caption">Defensa Actual</Typography>
      <CssTextField
        fullWidth
        // type="number"
        id="Defensa"
        value={actDef}
        // style={{ maxWidth: "60%" }}
        draggable
        disabled
      />
    </>
  );
};
