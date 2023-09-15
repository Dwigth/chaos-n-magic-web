import { FC, useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import CSWalletSlots from "./CSWalletSlots";

interface BackPack {
  backPackUsed: number;
}

const CSWalletControler: FC<BackPack> = ({ backPackUsed }) => {
  const { characterState } = useCharacter();

  let name = "";

  let walletSmall = false;

  let walletMedium = false;

  let walletBig = false;

  let walletGiant = false;

  let numberSlots = 0;

  let carry = 0;
  let newCarry = 0;

  characterState.inventory.items.map(({}, index: number) => {
    if (characterState.inventory.items[index].name != null) {
      name = characterState.inventory.items[index].name;

      walletSmall = name.includes("2x1");
      walletMedium = name.includes("2x2");
      walletBig = name.includes("3x3");
      walletGiant = name.includes("3x4");
    }

    if (
      walletSmall &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 2;
    }

    if (
      walletMedium &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 4;
    }

    if (
      walletBig &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 12;
    }

    if (
      walletGiant &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 16;
    }

    if (numberSlots >= 27) numberSlots = 27;
  });

  const checkboxes = Array(numberSlots).fill({});
  const [checkedState] = useState(new Array(checkboxes.length).fill(false));

  characterState.inventory.items.map(({}, index: number) => {
    if (characterState.inventory.items[index].isEquipped == false) {
      carry +=
        characterState.inventory.items[index].weight *
        characterState.inventory.items[index].quantity;

      if (carry >= backPackUsed || backPackUsed == 0) {
        newCarry +=
          characterState.inventory.items[index].weight *
            characterState.inventory.items[index].quantity -
          backPackUsed;

        for (let i = 0; i < newCarry; i++) {
          checkedState[i] = true;
          for (let index = i + 1; index < numberSlots; index++) {
            checkedState[index] = false;
          }
        }
      }

      if (newCarry <= 0) {
        for (let index = 0; index < numberSlots; index++) {
          checkedState[index] = false;
        }
      }

      if (newCarry >= numberSlots) {
        newCarry = numberSlots;
      }
    }
  });

  const countCheckedCheckboxes = () => {
    const count = Math.round(newCarry);
    return count;
  };

  return (
    <Container
      sx={{
        justifyContent: "center",
      }}
    >
      <Grid
        container
        direction="row"
        columnSpacing={5}
        justifyContent={"flex-start"}
      >
        <CSWalletSlots checkboxes={checkboxes} checkedState={checkedState} />
      </Grid>
      <p>
        Espacio de la carteras en uso:{" "}
        <strong>{countCheckedCheckboxes()}</strong>
      </p>
    </Container>
  );
};

export default CSWalletControler;
