import { Container, Grid } from "@mui/material";
import { useState } from "react";
import ProfessionGrid from "./ProfessionGrid";
import ProfessionDetails from "./ProfessionDetails";
import { SelectedProfession } from "../../data/types/profression.type";


export default function ProfessionSelector() {
  const [profession, setProfession] = useState({} as SelectedProfession);
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ProfessionGrid onProfessionSelect={setProfession} />
        </Grid>
        <Grid item xs={6}>
          <ProfessionDetails profession={profession} />
        </Grid>
      </Grid>
    </Container>
  );
}