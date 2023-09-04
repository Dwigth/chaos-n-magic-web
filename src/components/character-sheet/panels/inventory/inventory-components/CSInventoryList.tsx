import { List, ListItem, styled } from "@mui/material";
import { CSInventoryItem } from "./CSInventoryItem";
import { CSInventoryListHeader } from "./CSInventoryListHeader";

const ItemRow = styled(ListItem)({
  marginTop: -20,
});

export function CSInventoryList() {
  return (
    <List>
      <ItemRow sx={{marginBottom: 2}}>
        <CSInventoryListHeader />
      </ItemRow>
      <ItemRow>
        <CSInventoryItem />
      </ItemRow>
      <ItemRow>
        <CSInventoryItem />
      </ItemRow>
    </List>
  );
}
