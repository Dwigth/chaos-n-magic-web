import { IconButton, IconButtonProps } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function DeleteButton(props: IconButtonProps){
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