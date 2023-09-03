import { Avatar, FormControl, MenuItem, Select } from "@mui/material";
import { useCharacter } from "../reducer-context/CharacterContextProvider";

import Meat from "../../../assets/images/herodiet/HeroDiet_Meat.png";
import Herbivore from "../../../assets/images/herodiet/HeroDiet_Herbivore.png";
import Omnivore from "../../../assets/images/herodiet/HeroDiet_Omnivore.png";

export const CSCharDiet = () => {
  const { characterState, characterDispatch } = useCharacter();

  const handleChange = (event: any) => {
    const value = event.target.value as string;
    characterDispatch({
      type: "update_diet",
      payload: value,
    });
  };

  return (
    // <TextField
    //       fullWidth
    //       color="secondary"
    //       id="info-diet"
    //       label="Dieta"
    //       variant="outlined"
    //       type="text"
    //       name="info-diet"
    //       defaultValue=" "
    //     />
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
        <MenuItem value={"carnívoro"}>
          <Avatar src={Meat} />
        </MenuItem>
        <MenuItem value={"herbivorous"}>
          <Avatar src={Herbivore} />
        </MenuItem>
        <MenuItem value={"omnívoro"}>
          <Avatar src={Omnivore} />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
