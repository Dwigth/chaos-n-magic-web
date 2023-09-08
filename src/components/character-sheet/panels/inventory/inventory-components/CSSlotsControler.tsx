import { useState } from "react";
import CSSlots from "./CSSlots";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useCharacter } from "../../../reducer-context/CharacterContextProvider";

const CSSlotsControler = () => {
  const { characterState } = useCharacter();

  let smallBackPack = 16;

  let mediumBackpack = 25;

  let bigBackpack = 36;

  let explorerBackpack = 48;

  let numberSlots = 0;

  let columns = 0;

  characterState.inventory.items.map(({}, index: number) => {
    if (
      characterState.inventory.items[index].name === "Mochila pequeña" &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += smallBackPack;
      columns = 4;
    }

    if (
      characterState.inventory.items[index].name === "Mochila mediana" &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += mediumBackpack;
      columns = 5;
    }

    if (
      characterState.inventory.items[index].name === "Mochila grande" &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += bigBackpack;
      columns = 6;
    }

    if (
      characterState.inventory.items[index].name === "Mochila explorador" &&
      characterState.inventory.items[index].isEquipped === true
    ) {
      numberSlots += explorerBackpack;
      columns = 6;
    }

    if (numberSlots >= 48) numberSlots = 48;
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
        backgroundImage: "",
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
          Espacio del inventario en uso:{" "}
          <strong>{countCheckedCheckboxes()}</strong>
        </p>
      </Grid>
    </Container>
  );
};

export default CSSlotsControler;
