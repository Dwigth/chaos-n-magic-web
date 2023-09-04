import { Box, Grid, Typography } from "@mui/material";
import { CSMoneyField } from "./inventory-components/CSMoneyField";
import { CSInventoryList } from "./inventory-components/CSInventoryList";
import { CSInventorySlots } from "./inventory-components/CSInventorySlots";
import { AddButton } from "../../../global-components/AddButton";

export function CSInventoryControl() {
  return (
    <Box>
      <Grid container spacing={0} justifyContent={"space-between"} alignItems={"flex-start"}>
        <Grid item container xs={8} spacing={0} justifyContent={"flex-start"} alignItems="flex-start">
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
          <Grid item xs={1}> <AddButton clicHandler={function (val: any): void {
            throw new Error("Function not implemented.");
          } } /> </Grid>
        </Grid>
        <Grid item xs={4}>
            <CSInventorySlots />
        </Grid>
      </Grid>
    </Box>
  );
}
