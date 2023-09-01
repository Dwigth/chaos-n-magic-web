import { TextField, styled } from "@mui/material";
import { FC, useState } from "react";

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
  actBonus: number;
  bonus: (bonnus: number) => void;
}

export const CSDefenseBonus: FC<Props> = ({ bonus, actBonus }) => {
  const [bonusDef, setBonus] = useState({ bonusShield: 0 });

  const currentBonus = (val: number) => bonus(val);

  const handleDefense = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(99, Number(event.target.value)));
    setBonus((bonusDef) => {
      return { ...bonusDef, [name]: value };
    });

    currentBonus(value);
  };

  bonusDef.bonusShield = actBonus;

  if (bonusDef.bonusShield < 0) {
    bonusDef.bonusShield = 0;
  }

  return (
    <CssTextField
      fullWidth
      type="number"
      label="Bono"
      id="bono"
      name="bonusShield"
      value={bonusDef.bonusShield}
      onChange={handleDefense}
    />
  );
};
