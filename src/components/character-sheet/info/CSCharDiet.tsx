import { Avatar, FormControl, MenuItem, Select } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

import Meat from "../../../assets/images/herodiet/HeroDiet_Meat.png";
import Herbivore from "../../../assets/images/herodiet/HeroDiet_Herbivore.png";
import Omnivore from "../../../assets/images/herodiet/HeroDiet_Omnivore.png";
import { useParams } from "react-router-dom";

export const CSCharDiet = () => {
  const { characterState, characterDispatch } = useCharacter();
  let params = useParams();

  async function putCharDiet(val: string) {
    try {
      await fetch(import.meta.env.VITE_CHAOS_SERVER + "/hero-sheet", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          heroSheetId: params.sheetId,
          propertyToUpdate: ["diet"],
          value: val,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_diet",
      payload: value,
    });

    putCharDiet(value);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="herodiet"
        id="herodiet"
        value={characterState.diet}
        onChange={handleChange}
        sx={{
          style: {
            height: "80%",
            marginTop: "-5px",
          },
        }}
      >
        <MenuItem value={"carnivore"}>
          <Avatar src={Meat} />
        </MenuItem>
        <MenuItem value={"herbivore"}>
          <Avatar src={Herbivore} />
        </MenuItem>
        <MenuItem value={"omnivore"}>
          <Avatar src={Omnivore} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
