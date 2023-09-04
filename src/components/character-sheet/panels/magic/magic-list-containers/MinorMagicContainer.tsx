import {
  Card,
  Paper,
  Stack,
  TableCell,
  Tooltip,
  Typography,
} from "@mui/material";
import { AddButton } from "../../../../global-components/AddButton";
import { MagicListContainer } from "./MagicListContainer";

export function MinorMagicContainer() {
  return (
    <Card variant="outlined" sx={{ width: "100%", }}>
      <Stack spacing={1} sx={{ }}>
        <Paper elevation={2}>
          <TableCell>
            <Typography variant="caption"> Magia Menor</Typography>
            <Tooltip title="Agregar Lista">
              <AddButton
                clicHandler={function (val: any): void {
                  throw new Error("Function not implemented.");
                }}
              />
            </Tooltip>
          </TableCell>
        </Paper>
        <Card>
          <MagicListContainer />
        </Card>
      </Stack>
    </Card>
  );
}
