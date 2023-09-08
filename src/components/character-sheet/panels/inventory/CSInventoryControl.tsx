import { Box, Grid, Typography } from "@mui/material";
import { CSMoneyField } from "./inventory-components/CSMoneyField";
import { CSInventoryList } from "./inventory-components/CSInventoryList";
// import { CSInventorySlots } from "./inventory-components/CSInventorySlots";
import { AddButton } from "../../../global-components/AddButton";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import CSSlotsControler from "./inventory-components/CSSlotsControler";

export function CSInventoryControl() {
  const { characterState, characterDispatch } = useCharacter();

  let params = useParams();

  let int = 0;

  async function newInventory(int: number) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["inventory", "items", int],
          value: {
            name: "",
            weight: 0,
            quantity: 0,
            isEquipped: false,
          },
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  int = characterState.inventory.items.length;

  const addTalent = (int: any) => {
    characterDispatch({
      type: "add_inventory_item",
      payload: {
        int,
      },
    });
    newInventory(int);
  };

  return (
    <Box>
      <Grid
        container
        spacing={0}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={8}
          lg={9}
          xl={9}
          spacing={0}
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <Grid item xs={4}>
            <Typography variant={"h6"}> Inventario</Typography>
          </Grid>
          <Grid item xs={8}>
            <CSMoneyField />
          </Grid>
          <Grid item xs={12}>
            <CSInventoryList />
          </Grid>
          <Grid item xs={11}></Grid>
          <Grid item xs={1}>
            <AddButton clicHandler={() => addTalent(int)} />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          {/* <CSInventorySlots /> */}
          <CSSlotsControler />
        </Grid>
      </Grid>
    </Box>
  );
}
