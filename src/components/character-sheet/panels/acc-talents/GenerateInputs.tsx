import { useState } from "react";
import TalentTextField from "./TalentTextField";
import { AddButton } from "../../../global-components/AddButton";
import { DeleteButton } from "../../../global-components/DeleteButton";
import ActionTextField from "./ActionTextField";

function AddDynamicInput() {
  const [val, setVal] = useState<any[]>([]);
  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (onChangeValue: any, i: any) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i: any) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  // console.log(val, "data-");
  return (
    <>
      {val.map((datas, int) => {
        return (
          <>
            <input
              key={int}
              value={datas}
              onChange={(e) => handleChange(e, int)}
            />
            <TalentTextField />
            <ActionTextField />
            <button onClick={() => handleDelete(int)} > <DeleteButton /> </button>
          </>
        );
      })}
      <button onClick={() => handleAdd()} > <AddButton /></button>
    </>
  );
}
export default AddDynamicInput;
