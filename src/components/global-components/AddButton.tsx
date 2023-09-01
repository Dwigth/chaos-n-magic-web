import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FC } from "react";

interface HandleAdd {
  clicHandler: (val: any) => void;
}

export const AddButton: FC<HandleAdd> = ({ clicHandler }) => {
  return (
    <IconButton
      aria-label="agregar"
      style={{ paddingTop: 4 }}
      color="secondary"
      onClick={clicHandler}
    >
      <AddCircleIcon />
    </IconButton>
  );
};
