import { useState } from "react";
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
  console.log(val, "data-");
  return (
    <>
      {val.map((data, i) => {
        return (
          <div>
            <input key={i} value={data} onChange={(e) => handleChange(e, i)} />
            <button onClick={() => handleDelete(i)}>x</button>
          </div>
        );
      })}

      <button onClick={() => handleAdd()}>Add</button>
    </>
  );
}
export default AddDynamicInput;
