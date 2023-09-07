import { Checkbox } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { FC } from "react";

interface checkbox {
  checkboxes: any;
  checkedState: any;
  handleCheckboxChange: any;
}
const CSSlots: FC<checkbox> = ({
  checkboxes,
  checkedState,
  handleCheckboxChange,
}) => {
  return (
    <>
      {checkboxes.map(({}, index: number) => (
        <Grid xs={1} md={1} key={index}>
          <Checkbox
            checked={checkedState[index]}
            onChange={() => handleCheckboxChange(index)}
            color="secondary"
            sx={{ "& .MuiSvgIcon-root": { fontSize: 31 } }}
          />
        </Grid>
      ))}
    </>
  );
};

export default CSSlots;
