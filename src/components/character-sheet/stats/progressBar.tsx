import React, { ChangeEvent, useState } from "react";

export default function progressBar() {
  const [value, setValue] = useState<string | number>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(+e.target.value);
  };

  return <></>;
}
