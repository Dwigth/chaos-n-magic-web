import {
  Avatar,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useState } from "react";

interface CharDiet {
  Datos: any;
}

export const CSCharDiet: FC<CharDiet> = ({ Datos }) => {
  const [diet, setDiet] = useState(
    Datos.heroBasicInfo.diet ? Datos.heroBasicInfo.diet : ""
  );

  const handleChange = (event: SelectChangeEvent) => {
    setDiet(event.target.value as string);
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
        value={diet}
        onChange={handleChange}
        sx={{
          style: {
            height: "80%",
            marginTop: "-5px",
          },
        }}
      >
        <MenuItem value={"carnívoro"}>
          <Avatar src="src/assets/images/herodiet/HeroDiet_Meat.png" />
        </MenuItem>
        <MenuItem value={"herbívoro"}>
          <Avatar src="src/assets/images/herodiet/HeroDiet_Herbivore.png" />
        </MenuItem>
        <MenuItem value={"omnívoro"}>
          <Avatar src="src/assets/images/herodiet/HeroDiet_Omnivore.png" />
        </MenuItem>
      </Select>
    </FormControl>
  );
};
