import { useState } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";
import CSWalletSlots from "./CSWalletSlots";

const CSWalletControler = () => {
  const { characterState } = useCharacter();

  let name = "";

  let walletSmall = false;

  let walletMedium = false;

  let walletBig = false;

  let walletGiant = false;

  let numberSlots = 0;

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
  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );

  const handleCheckboxChange = (index: any) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const countCheckedCheckboxes = () => {
    const count = checkedState.filter(Boolean).length;
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
        <CSWalletSlots
          checkboxes={checkboxes}
          checkedState={setCheckedState}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Grid>
      <p>
        Espacio de la carteras en uso:{" "}
        <strong>{countCheckedCheckboxes()}</strong>
      </p>
    </Container>
  );
};

export default CSWalletControler;
