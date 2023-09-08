import { Box, Grid, Typography } from "@mui/material";
import { CSMoneyField } from "./inventory-components/CSMoneyField";
import { CSInventoryList } from "./inventory-components/CSInventoryList";
import { useParams } from "react-router-dom";
import { useCharacter } from "../../reducer-context/CharacterContextProvider";
import CSSlotsControler from "./inventory-components/CSSlotsControler";

export function CSInventoryControl() {
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
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
          <CSSlotsControler />
        </Grid>
      </Grid>
    </Box>
  );
}
