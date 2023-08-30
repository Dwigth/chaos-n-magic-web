import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export function AddButton(){
    return(
        <IconButton
          aria-label="agregar"
          style={{ paddingTop: 4 }}
          color="secondary"
        >
          <AddCircleIcon />
        </IconButton>
    )
}