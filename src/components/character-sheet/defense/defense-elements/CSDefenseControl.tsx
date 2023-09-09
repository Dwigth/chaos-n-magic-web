import {
  Button,
  ButtonGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
      borderRadius: 80,
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
  getBonus: number;
  actualDefense: number;
  totalDefense: number;
  sendNewDefense: (def: number) => void;
  sendNewBonus: (bon: number) => void;
}

let damage = 0;
let bonus = 0;

export const CSDefenseControl: FC<Props> = ({
  actualDefense,
  totalDefense,
  sendNewDefense,
  sendNewBonus,
  getBonus,
}) => {
  const [amount, setAmount] = useState({ defenseControl: 0 });

  let total = totalDefense;

  let totalBonus = getBonus;

  const handleChange = (event: any) => {
    const { name } = event.target;
    const value = Math.max(0, Math.min(99, Number(event.target.value)));
    setAmount((amount) => {
      return { ...amount, [name]: value };
    });
  };

  const Damage = () => {
    if (totalBonus >= 0) {
      if (amount.defenseControl <= totalBonus) {
        bonus = Number(totalBonus) - Number(amount.defenseControl);

        totalBonus = bonus;

        damage = Number(actualDefense);

        amount.defenseControl = 0;
      } else {
        bonus = Number(totalBonus) - Number(amount.defenseControl);
        totalBonus = bonus;

        damage = Number(actualDefense) + bonus;

        amount.defenseControl = 0;
      }
    } else {
      damage = Number(actualDefense) - Number(amount.defenseControl);
    }

    if (damage <= 0) {
      damage = 0;
    }

    if (actualDefense >= total) {
      setAmount((amount) => {
        return { ...amount, defenseControl: 0 };
      });
    }

    amount.defenseControl = 0;

    return damage;
  };

  const Heal = () => {
    let heal = Number(actualDefense) + Number(amount.defenseControl);

    if (heal >= total) {
      heal = total;
    }

    if (actualDefense >= total) {
      setAmount((amount) => {
        return { ...amount, defenseControl: 0 };
      });
    }

    amount.defenseControl = 0;

    return heal;
  };

  return (
    <Grid container spacing={0} alignItems={"center"} justifyContent={"center"}>
      <Grid xs={12}>
        <Typography variant="caption">Curar o Recibir Daño</Typography>
      </Grid>
      <Grid xs={2} />
      <Grid xs={8}>
        <CssTextField
          variant="outlined"
          name="defenseControl"
          type="number"
          value={amount.defenseControl}
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={2} />
      <Grid xs={12}>
        {/* <DefenseHealDamage setAccion={(acc) => acc} /> */}
        <ButtonGroup size="small" variant="contained">
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              sendNewDefense(Damage()), sendNewBonus(totalBonus);
            }}
          >
            Daño
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => sendNewDefense(Heal())}
          >
            Curar
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};
