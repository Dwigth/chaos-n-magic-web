import React, { ChangeEvent, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Barvalue from "./progressBar";

export default function CSstats() {
  const [value, setValue] = useState<string | number>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  const [value2, setValue2] = useState<string | number>("");

  const handleChange2 = (e: ChangeEvent<HTMLInputElement>) => {
    setValue2(+e.target.value);
  };

  const [value3, setValue3] = useState<string | number>("");

  const handleChange3 = (e: ChangeEvent<HTMLInputElement>) => {
    setValue3(+e.target.value);
  };

  return (
    <div>
      <label htmlFor="">Nivel</label>
      <input type="number" name="level" id="level" />

      <label htmlFor="">Postura</label>
      <input type="checkbox" name="stance" id="stance" />
      <input type="checkbox" name="stance2" id="stance" />
      <input type="checkbox" name="stance3" id="stance" />

      <label htmlFor="">Postura temporal</label>
      <input type="checkbox" name="stance" id="stance" />
      <input type="checkbox" name="stanceT2" id="stance" />
      <input type="checkbox" name="stanceT3" id="stance" />
      <input type="checkbox" name="stanceT4" id="stance" />

      <label htmlFor="">Hitos</label>
      <input type="checkbox" name="milestone" id="stance" />
      <input type="checkbox" name="milestone2" id="stance" />
      <input type="checkbox" name="milestone3" id="stance" />
      <input type="checkbox" name="milestone4" id="stance" />

      <label htmlFor="">Desangre</label>
      <input
        type="number"
        name="desangre"
        id="desangre"
        value={value === 0 ? "" : value}
        max={100}
        onChange={handleChange}
      />
      <ProgressBar completed={value} maxCompleted={100} bgColor="Red" />

      <label htmlFor="">Veneno</label>
      <input
        type="number"
        name="veneno"
        id="veneno"
        value={value2 === 0 ? "" : value2}
        max={100}
        onChange={handleChange2}
      />
      <ProgressBar completed={value2} maxCompleted={100} bgColor="Green" />

      <label htmlFor="">Psiquico</label>
      <input
        type="number"
        name="psiquico"
        id="psiquico"
        value={value3 === 0 ? "" : value3}
        max={100}
        onChange={handleChange3}
      />
      <ProgressBar completed={value3} maxCompleted={100} bgColor="Purple" />
    </div>
  );
}
