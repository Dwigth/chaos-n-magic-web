import {
  Divider,
  Grid,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { AddButton } from "../../../../global-components/AddButton";
import { DeleteButton } from "../../../../global-components/DeleteButton";

export function MagicListContainer() {
  return (
    <Paper style={{ width: "100%", overflow: "hidden", margin: 0 }}>
      <List>
        <ListItem sx={{ backgroundColor: "#0a1006" }}>
          <Grid
            container
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
          >
            <Grid item xs={8}>
              <Typography variant="h6">
                Lista 1 {/* Lista número incremental */}{" "}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <AddButton clicHandler={() => {}} />
            </Grid>
            <Grid item xs={2}>
              <DeleteButton clicHandler={() => {}} />{" "}
            </Grid>
          </Grid>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem disableGutters disablePadding>
          {/* <MagicSpellComponent /> */}
        </ListItem>
        <ListItem disableGutters disablePadding>
          {/* <MagicSpellComponent /> */}
        </ListItem>
      </List>
    </Paper>
  );
}
