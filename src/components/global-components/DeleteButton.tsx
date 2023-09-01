import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

interface HandleDelete {
  clicHandler: (val: any) => void;
}

export const DeleteButton: FC<HandleDelete> = ({ clicHandler }) => {
  return (
    <IconButton
      aria-label="agregar"
      style={{ paddingTop: 4 }}
      color="secondary"
      onClick={clicHandler}
    >
      <DeleteIcon />
    </IconButton>
  );
};
