import { List } from "@mui/material";
import { CSInventoryItem } from "./CSInventoryItem";
import { CSInventoryListHeader } from "./CSInventoryListHeader";

export function CSInventoryList() {
  return (
    <List>
      <CSInventoryListHeader />
      <CSInventoryItem />
    </List>
  );
}
