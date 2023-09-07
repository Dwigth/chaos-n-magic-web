import { useState } from "react";
import CSSlots from "./CSSlots";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

const CSSlotsControler = () => {
  const checkboxes = Array(36).fill({});
  const [checkedState, setCheckedState] = useState(
    new Array(checkboxes.length).fill(false)
  );

  const handleCheckboxChange = (index: any) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const countCheckedCheckboxes = () => {
    const count = checkedState.filter(Boolean).length;
    return count;
  };

  return (
    <Container
      sx={{
        justifyContent: "center",
        backgroundImage: "",
      }}
    >
      <Grid
        container
        direction="row"
        spacing={0}
        justifyContent={"flex-end"}
        alignItems={"center"}
        columns={6}
      >
        <CSSlots
          checkboxes={checkboxes}
          checkedState={checkedState}
          handleCheckboxChange={handleCheckboxChange}
        />
        <p>
          Objetos del inventario en uso:{" "}
          <strong>{countCheckedCheckboxes()}</strong>
        </p>
      </Grid>
    </Container>
  );
};

export default CSSlotsControler;
