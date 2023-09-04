import { useState } from "react";
import { AddButton } from "../../../global-components/AddButton";
import { DeleteButton } from "../../../global-components/DeleteButton";
import ActionTextField from "./ActionTextField";
import { Grid } from "@mui/material";

function AddDynamicInput() {
  const [val, setVal] = useState<any[]>([1]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };

  const handleChange = (event: any, i: any) => {
    const inputdata = [...val];
    inputdata[i] = event.target.value;
    setVal(inputdata);
  };

  const handleDelete = (i: any) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  // console.log(val, "data-");
  return (
    <Grid>
      {val.map((datas, int) => {
        return (
          <span key={int}>
            {/* <input value={datas} onChange={(e) => handleChange(e, int)} /> */}
            <ActionTextField />

            {int > 0 ? (
              <DeleteButton clicHandler={() => handleDelete(int)} />
            ) : null}

            {/* <DeleteButton clicHandler={() => handleDelete(int)} /> */}
          </span>
        );
      })}
      <AddButton clicHandler={handleAdd} />
    </Grid>
  );
}
export default AddDynamicInput;
