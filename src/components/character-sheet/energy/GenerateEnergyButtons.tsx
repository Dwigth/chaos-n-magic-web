import { Grid, IconButton } from "@mui/material";
import { useState } from "react";
import { CSEnergyButton } from "./CSEnergyButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

let int = 0;
const energy = "Energy";

function AddEnergyButtons() {
  const [val, setVal] = useState<any[]>([]);

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);

    int += 1;
    if (int > 4) int = 4;
  };

  const handleDelete = (i: any) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);

    int -= 1;
    if (int <= 0) int = 0;
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      {val.map((i) => {
        return (
          <Grid item xs={1} md={1.2} key={energy + crypto.randomUUID()}>
            <CSEnergyButton
              {...label}
              checked
              key={energy + crypto.randomUUID()}
              style={{ filter: "saturate(50%) " }}
              onClick={() => handleDelete(i)}
            />
          </Grid>
        );
      })}
      <Grid item xs={1} md={1}>
        <IconButton
          aria-label="agregar"
          style={{ paddingTop: 4 }}
          color="secondary"
          onClick={() => (int >= 4 ? null : handleAdd())}
        >
          <AddCircleIcon />
        </IconButton>
      </Grid>
    </>
  );
}
export default AddEnergyButtons;
