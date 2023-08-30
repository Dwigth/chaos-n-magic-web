import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteButton(){
    return(
        <IconButton
          aria-label="agregar"
          style={{ paddingTop: 4 }}
          color="secondary"
        >
          <DeleteIcon />
        </IconButton>
    )
}