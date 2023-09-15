import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FC } from "react";

interface checkbox {
  checkboxes: any;
  checkedState: any;
}
const CSWalletSlots: FC<checkbox> = ({ checkboxes, checkedState }) => {
  return (
    <>
      {checkboxes.map(({}, index: number) => (
        <Grid xs={1} md={1} key={index}>
          <Checkbox
            checked={checkedState[index]}
            color="secondary"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 31 } }}
          />
        </Grid>
      ))}
    </>
  );
};

export default CSWalletSlots;
