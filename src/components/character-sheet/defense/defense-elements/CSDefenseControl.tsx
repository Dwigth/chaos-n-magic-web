import {
  Button,
  ButtonGroup,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
// import { DefenseHealDamage } from "../defense-control-buttons/DefenseHealDamage";
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
}

let damage = 0;
let bonus = 0;

export const CSDefenseControl: FC<Props> = ({
  actualDefense,
  totalDefense,
  sendNewDefense,
  getBonus,
}) => {
  const [amount, setAmount] = useState({ defenseControl: 0 });

  let total = totalDefense;

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setAmount((amount) => {
      return { ...amount, [name]: value };
    });
  };

  function NewBonus(val: number) {
    getBonus = val;
  }

  const Damage = () => {
    if (getBonus > 0) {
      if (amount.defenseControl <= getBonus) {
        bonus = Number(getBonus) - Number(amount.defenseControl);

        NewBonus(bonus);
        //  = bonus;
        // console.log("Bonus Data: " + getBonus);
        damage = Number(actualDefense);

        amount.defenseControl = 0;
      } else {
        bonus = Number(getBonus) - Number(amount.defenseControl);
        getBonus = bonus;

        damage = Number(actualDefense) + bonus;

        amount.defenseControl = 0;
      }
    } else {
      damage = Number(actualDefense) - Number(amount.defenseControl);
    }

    if (damage <= 0) {
      damage = 0;
    }

    if (damage >= total) {
      damage = total;
      amount.defenseControl = 0;
    }

    amount.defenseControl = 0;

    return damage;
  };

  const Heal = () => {
    let heal = Number(actualDefense) + Number(amount.defenseControl);
    console.log("Curacion: " + heal);

    if (heal > total) {
      heal = total;
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
          defaultValue={amount.defenseControl}
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
              sendNewDefense(Damage()), getBonus;
            }}
            // onClickCapture={() => sendNewBonus(newB(passBonus))}
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
