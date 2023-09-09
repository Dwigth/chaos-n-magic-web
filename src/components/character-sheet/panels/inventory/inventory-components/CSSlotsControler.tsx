import { useState } from "react";
import CSSlots from "./CSSlots";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";

const CSSlotsControler = () => {
  const { characterState } = useCharacter();

  let name = "";

  let smallBackPack = false;

  let mediumBackpack = false;

  let bigBackpack = false;

  let explorerBackpack = false;

  let numberSlots = 0;

  let columns = 0;

  let carry = 0;

  characterState.inventory.items.map(({}, index: number) => {
    if (characterState.inventory.items[index].name != null) {
      name = characterState.inventory.items[index].name;

      smallBackPack = name.includes("4x4");
      mediumBackpack = name.includes("5x5");
      bigBackpack = name.includes("6x6");
      explorerBackpack = name.includes("6x8");
    }

    if (
      smallBackPack &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 16;
      columns = 4;
    }

    if (
      mediumBackpack &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 25;
      columns = 5;
    }

    if (
      bigBackpack &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 36;
      columns = 6;
    }

    if (
      explorerBackpack &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += 48;
      columns = 6;
    }

    if (numberSlots >= 48) numberSlots = 48;
  });

  const checkboxes = Array(numberSlots).fill({});
  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );

  characterState.inventory.items.map(({}, index: number) => {
    if (characterState.inventory.items[index].isEquipped == true) {
      carry +=
        characterState.inventory.items[index].weight *
        characterState.inventory.items[index].quantity;
    }
  });

  const handleCheckboxChange = () => {
    const updatedSlots = checkedState.map((item, idx) =>
      idx < carry ? (item = true) : (item = false)
    );
    setCheckedState(updatedSlots);
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
        spacing={0}
        justifyContent={"flex-start"}
        alignItems={"center"}
        columns={columns}
      >
        <CSSlots
          checkboxes={checkboxes}
          checkedState={checkedState}
          handleCheckboxChange={handleCheckboxChange}
        />
        <p>
          Espacio de la mochila en uso:{" "}
          <strong>{countCheckedCheckboxes()}</strong>
        </p>
      </Grid>
    </Container>
  );
};

export default CSSlotsControler;
